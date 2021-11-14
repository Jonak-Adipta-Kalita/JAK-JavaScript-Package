/**
 * Title Case a String!!
 * @param {string} string String to Title Case
 * @returns {string} String but Title Cased!!
 */
const toTitleCase = (string) => {
    if (typeof string !== "string") throw new TypeError("Provide a STRING!!");

    let sentence = string.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }

    return sentence.join(" ");
};

export default toTitleCase;
