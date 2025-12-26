const { add, divide } = require('../src/math');

test('add works', () => {
  expect(add(2, 3)).toBe(5);
});

test('divide works', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divide by zero throws error', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});
