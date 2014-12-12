#!/usr/bin/env node

var cmp = require("./lib/cmp");

console.log(cmp.cmp(1, 1));
console.log(cmp.cmp(1, 2));
console.log(cmp.cmp(2, 1));
console.log(cmp.cmp(1, [1,2,3]));
console.log(cmp.eq([1,2,3], [1,2,3]));
console.log(cmp.lte([1,2], [1,2,3]));
