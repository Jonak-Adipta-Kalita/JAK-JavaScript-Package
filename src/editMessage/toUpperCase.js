const toUpperCase = (string) => {
    if (typeof string !== "string") throw new TypeError("Provide a STRING!!");
    return string.toUpperCase();
};

export default toUpperCase;
