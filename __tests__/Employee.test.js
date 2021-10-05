const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const employee = new Employee("Joe", 1, "Joe@gmail.com");

  expect(employee.name).toBe("Joe");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
