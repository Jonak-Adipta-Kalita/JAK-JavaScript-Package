const utils = require("../../");

it("matches", () => {
	expect(utils.editMessage.toLowerCase("heLlO WoRLd")).toBe("hello world");
});
