/**
 * Remove Space from a String!!
 * @param {string} string String to remove space from
 * @returns String with Spaces Removed!!
 */
const removeSpace = (string) => {
    if (typeof string !== "string") throw new TypeError("Provide a STRING!!");
    return string.replace(/\s/g, "");
};

export default removeSpace;
