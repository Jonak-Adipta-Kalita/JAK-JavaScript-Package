const utils = require("../../");

it("matches", () => {
	expect(utils.editMessage.toUpperCase("heLlO WoRLd")).toBe("HELLO WORLD");
});
