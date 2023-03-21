export default class Subject {
  _discipline: string;
  constructor(discipline: string) {
    this._discipline = discipline;
  }
  get discipline(): string {
    return this._discipline;
  }

  set discipline(value: string) {
    if (value.length < 3) {
      throw new Error('Discipline must have more than 3 characteres');
    }
    this._discipline = value;
  }
}
