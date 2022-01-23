const { editMessage } = require("../dist/cjs/index");

it("matches", () => {
	expect(new editMessage("heLlO WoRLd").removeSpace()).toBe("heLlOWoRLd");
});

it("matches", () => {
	expect(new editMessage("heLlO WoRLd").toLowerCase()).toBe("hello world");
});

it("matches", () => {
	expect(new editMessage("heLlO WoRLd").toTitleCase()).toBe("Hello World");
});

it("matches", () => {
	expect(new editMessage("heLlO WoRLd").toUpperCase()).toBe("HELLO WORLD");
});
