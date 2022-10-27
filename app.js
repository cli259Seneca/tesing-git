//require the package and call the package function
//example lodash
const lodash = require('lodash');

const items = [0, [[1,2,3,10, 11, 12],[[20, 21], 100, 150]]]

const newItems = lodash.flatMapDeep(items);
console.log(newItems);