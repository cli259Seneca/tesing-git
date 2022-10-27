// npm --global command
// npm --version

// local dependency - local package: use in this particular project only
// npm i <package name>

// global dependency - use it in any projects
// npm install -g <package name>

// package.json - info of the project package
// (manual approach) create the package.json in the root and implement the properies manually
// npm init 
// npm init -y (everything by default)

//require the package and call the package function
//example lodash
// npm init
// npm install -i lodash

const lodash = require('lodash');

const items = [0, [[1,2,3,10, 11, 12],[[20, 21], 100, 150]]]

const newItems = lodash.flatMapDeep(items);
console.log(newItems);

