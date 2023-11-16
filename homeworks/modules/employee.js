export class Employee {
    constructor(id, salary) {
      this.id = id;
      this.salary = salary;
    }
  
    static adjustSalary(authority, amount) {
      authority.salary += amount;
    }

    static compareSalary(emp1, emp2) {
        let str
        if (emp1.salary > emp2.salary) {
            str = 'User with id ' + emp1.id + ' has greater salary';
            return str;
          } else if (emp1.salary < emp2.salary) {
            str = 'User with id ' + emp2.id + ' has greater salary';
            return str;
          } else {
            return 'salaries are equal';
          }
    }
  }