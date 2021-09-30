const utils = require("../../");

it("matches", () => {
	expect(utils.editMessage.toTitleCase("heLlO WoRLd")).toBe("Hello World");
});
