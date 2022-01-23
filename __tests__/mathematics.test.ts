const { mathematics } = require("../dist/cjs/index");

it("matches", () => {
	expect(new mathematics(5, 2).add()).toBe(7);
});

it("matches", () => {
	expect(new mathematics(5, 2).sub()).toBe(3);
});

it("matches", () => {
	expect(new mathematics(5, 2).mul()).toBe(10);
});

it("matches", () => {
	expect(new mathematics(5, 2).div()).toBe(2.5);
});
