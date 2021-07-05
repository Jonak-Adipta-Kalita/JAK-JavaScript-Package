"use strict";

function removeSpaceFromString(string) {
    if (typeof string !== "string") throw new TypeError("Provide a STRING!!");
    return string.replace(/\s/g, "");
}

module.exports = removeSpaceFromString;
