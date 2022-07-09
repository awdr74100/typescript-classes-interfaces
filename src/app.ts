abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log(`${this.name} Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private latestReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.latestReport) return this.latestReport;
    else throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (value) this.addReport(value);
    else throw new Error('Please pass in a valid value.');
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.latestReport = reports[reports.length - 1] || '';
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(`${this.name} Department - ID: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === 'Max') return;
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.latestReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employeeMax = Department.createEmployee('Max');
console.log(employeeMax, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Leo');

// it.employees = [...accounting.employees, 'Eric'];

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accountingCopy = AccountingDepartment.getInstance();

console.log(accounting, accountingCopy);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Sharon');

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'Working', describe: accounting.describe };

// accountingCopy.describe();
