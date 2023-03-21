import Employee from './Employee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  _registration: string;
  _admissionDate: Date;
  _salary: number;
  _subject: Subject;

  constructor(
    name: string,
    birthDate: Date,
    subject: Subject,
    salary: number,
    admissiontaDate: Date
  ) {
    super(name, birthDate);
    this._subject = subject;
    this._admissionDate = admissiontaDate;
    this._salary = salary;
    this._registration = this.generateRegistration()
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

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    if (value instanceof Subject) {
      this._subject = value;
    }
    throw new Error('Subject must have 3 or more characters');
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );

    return `TEA${randomStr}`;
  }
}
