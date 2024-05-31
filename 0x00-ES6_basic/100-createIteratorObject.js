// 100-createIteratorObject.js
export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employees = [];

  for (const department of Object.values(allEmployees)) {
    employees = employees.concat(department);
  }

  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employees.length) {
        return { value: employees[currentIndex++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
