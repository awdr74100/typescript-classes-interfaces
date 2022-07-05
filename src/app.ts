class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Leo');

// accounting.employees = [...accounting.employees, 'Eric'];

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Working', describe: accounting.describe };

// accountingCopy.describe();
