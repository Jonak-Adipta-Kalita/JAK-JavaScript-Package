const removeSpace = (string) => {
    if (typeof string !== "string") throw new TypeError("Provide a STRING!!");
    return string.replace(/\s/g, "");
};

export default removeSpace;
