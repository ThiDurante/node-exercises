export default class Subject {
  _subject: string;
  constructor(subject: string) {
    this._subject = subject;
  }
  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    if (value.length < 3) {
      throw new Error('Subject must have more than 3 characteres');
    }
    this._subject = value;
  }
}
