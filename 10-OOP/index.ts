import Person from './Person';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

const thiago = new Person('thiago', new Date('1990/07/07'));

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
carolina.assignmentsGrades = [55, 45];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), math, 2000, new Date('2004/11/05'));
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), history, 2000, new Date('2001/11/05'));
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), philosophy, 2000, new Date('2004/11/06'));

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
// fernando.assignmentsGrades = [45, 45, 45];

console.log(thiago);
