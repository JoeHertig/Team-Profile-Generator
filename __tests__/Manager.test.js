const Manager = require("../lib/Manager");

test("creates an Manager object", () => {
  const manager = new Manager("Joe", 1, "Joe@gmail.com", 1);

  expect(manager.name).toBe("Joe");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
