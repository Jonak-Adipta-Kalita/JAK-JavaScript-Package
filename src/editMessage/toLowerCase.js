/**
 * Lower Case a String!!
 * @param {string} string String to Lower Case
 * @returns String but Lower Cased!!
 */
const toLowerCase = (string) => {
    if (typeof string !== "string") throw new TypeError("Provide a STRING!!");
    return string.toLowerCase();
};

export default toLowerCase;
