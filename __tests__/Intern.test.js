const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Joe", 1, "Joe@gmail.com", "UofU");

  expect(intern.name).toBe("Joe");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
