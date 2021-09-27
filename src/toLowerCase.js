const toLowerCase = (string) => {
    if (typeof string !== "string") throw new TypeError("Provide a STRING!!");
    return string.toLowerCase();
};

export default toLowerCase;
