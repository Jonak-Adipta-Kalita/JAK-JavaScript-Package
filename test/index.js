const utils = require("..");
const assert = require("assert");

assert.strictEqual(utils.removeSpaceFromString("Hello World"), "HelloWorld");

console.log(`\u001B[32m✓\u001B[39m Tests Passed!!`);
