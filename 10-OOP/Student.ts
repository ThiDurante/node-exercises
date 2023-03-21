// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - assignmentsGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

import Person from './Person';

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];
  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('Enrollment must have more than 16 chars');
    }
    this._enrollment = value;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set examsGrades(grades: number[]) {
    if (grades.length > 4) {
      throw new Error('Studant must have 4 or less exams grades');
    }
    this._examsGrades = grades;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set assignmentsGrades(grades: number[]) {
    if (grades.length > 2) {
      throw new Error('Studant must have 2 or less assignmets grades');
    }
    this._assignmentsGrades = grades;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );
    return `STU${randomStr}`;
  }
}
