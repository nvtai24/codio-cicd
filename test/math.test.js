const { add } = require("../src/math");

test("add 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

// test("add failed 1 + 1 = 3", () => {
//   expect(add(1, 1)).toBe(3);
// });
