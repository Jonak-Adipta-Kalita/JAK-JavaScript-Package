/**
 * Subtract 2 Numbers!!
 * @param {number} num1 Number 1
 * @param {number} num2 Number 2
 * @returns {number} Subtracted Number!!
 */
const sub = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new TypeError("Provide a INTEGER!!");
    }

    return num1 - num2;
};

export default sub;
