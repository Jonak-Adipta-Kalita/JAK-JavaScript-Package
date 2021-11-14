/**
 * Upper Case a String!!
 * @param {string} string String to Upper Case
 * @returns {string} String but Upper Cased!!
 */
const toUpperCase = (string) => {
    if (typeof string !== "string") throw new TypeError("Provide a STRING!!");
    return string.toUpperCase();
};

export default toUpperCase;
