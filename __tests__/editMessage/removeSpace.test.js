const utils = require("../../");

it("matches", () => {
	expect(utils.editMessage.removeSpace("heLlO WoRLd")).toBe("heLlOWoRLd");
});
