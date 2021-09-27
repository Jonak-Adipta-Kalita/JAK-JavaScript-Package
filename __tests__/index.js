const utils = require("../");
const assert = require("assert");

assert.strictEqual(utils.removeSpace("Hello World"), "HelloWorld");
console.log(`\u001B[32m✓\u001B[39m Test 1 Passed!!`);

assert.strictEqual(utils.toUpperCase("Hello World"), "HELLO WORLD");
console.log(`\u001B[32m✓\u001B[39m Test 2 Passed!!`);

assert.strictEqual(utils.toLowerCase("Hello World"), "hello world");
console.log(`\u001B[32m✓\u001B[39m Test 3 Passed!!`);

assert.strictEqual(utils.toTitleCase("hello world"), "Hello World");
console.log(`\u001B[32m✓\u001B[39m Test 4 Passed!!`);
