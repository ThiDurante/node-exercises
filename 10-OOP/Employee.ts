import IEmployee from './IEmployee';
import Person from './Person';

export default class Employee extends Person implements IEmployee {
  readonly _registration: string;
  _salary: number;
  _admissionDate: Date;
  constructor(
    name: string,
    birthDate: Date,
    admissiontDate: Date,
    salary: number
  ) {
    super(name, birthDate);
    this._salary = salary;
    this._admissionDate = admissiontDate;
    this._registration = this.generateRegistration();
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `FNC${randomStr}`;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < this._salary) {
      throw new Error('Salary cannot be lowered');
    }
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }
}
