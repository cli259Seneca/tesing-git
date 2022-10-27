//globals
// 1 -  __dirname : current file directory
// 2 - __filename : current file name
// 3 - require : function to use modules
// 4 - module : info of current module
// 5 - process : info of current env

/*
//require module(bulit in)
    const name = require('./name');
    const utils = require('./utils');
    //require(./sum.js) - in sum.js, excutes a function to sum 2 numbers, it runs in app.js with this require
    utils.A(name.me);
    utils.A(name.gf); 
*/

/*
//os module(bulit in)
    const os = require('os');

    const currentOS ={
        name: os.type(),
        release: os.release(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        user: os.userInfo().username,
        upTime: os.uptime() 
    };

    console.log(currentOS);

*/
/*
//Path module(built in)
    const path = require('path');

    console.log(path.sep); // output: \

    const filePath = path.join('/example file/', "test.txt"); //join the dir and file as a path
    console.log(filePath); //output:\example file\test.txt

    const baseName = path.basename(filePath); //get the base name 
    console.log(baseName); //output: test.txt

    const absolute = path.resolve(__dirname, filePath) //get the absolute path
    console.log(absolute); //output: C:\example file\test.txt
*/

//fs module(built in)
//Sync
/*
const {readFileSync, writeFileSync} = require('fs');

const test1 = readFileSync('./example\ file/test1.txt', 'utf8');
const test2 = readFileSync('./example\ file/test2.txt', 'utf8');

console.log(test1, test2);

//like output file stream in c++
//if there is no file create one and write
//if there is a file, rewrite the file
writeFileSync(
    './output\ example\ file/outputTest1.txt', 
    "Reading file: \n" + "test1.txt\n" + "test2.txt\n" +
    `test1.txt: ${test1}\n` + 
    `test2.txt: ${test2}\n`,

    {flag: 'a'} //flag:append, dont overwrite just append
);
*/
/*
//async
const {readFile, writeFile} = require('fs');

readFile('./example\ file/test1.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err); 
        return;
    }
    
    const test1 = result;

    //call back
    readFile('./example\ file/test2.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err); 
            return;
        }
        
        const test2 = result;
    
    writeFile(
        './output\ example\ file/outputTest1.txt', 
        "Reading file: \n" + "test1.txt\n" + "test2.txt\n" +
        `test1.txt: ${test1}\n` + 
        `test2.txt: ${test2}\n`,
        (err, result)=>{
            if(err){
                console.log(err); 
                return;
            }

            console.log(result); //output: undefined
        }
    );

    })
})
*/
//async serves multiple users!!!!

//HTTP module

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Home page');
    }
    else if(req.url === '/abc'){
        res.end('abcdefg');
    }
    else{
    res.end(`
        <h1>Why are you here?!</h1>
        <a href="/">Come here!</a>
    `)
    }
})

server.listen(5000);

