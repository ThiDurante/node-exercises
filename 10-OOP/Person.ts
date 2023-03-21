export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('Name is too short');
    }
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    // const today = new Date()
    // const checkDate = today.getDate() < value.getDate()
    // if(checkDate){
    //   throw new Error('Birth date cannot be in the future')
    // }
    // const age = Math.floor((today.getDate() - value.getDate())/31_536_000_000)
    // console.log(age);

    // if(age > 120){
    // }
    this.validateDate(value);
    this._birthDate = value;
  }

  public validateDate(date: Date): boolean {
    const checkDate = new Date().getTime() < date.getTime();
    if (checkDate) {
      throw new Error('Birth date cannot be in the future');
    }
    if (this.getAge(date)) {
      throw new Error('A person cannot have more than 120 years');
    }
    return false;
  }
  private getAge(date: Date): boolean {
    const one_year_in_ms = 31_536_000_000;
    return (
      Math.floor((new Date().getTime() - date.getTime()) / one_year_in_ms) > 120
    );
  }
}
