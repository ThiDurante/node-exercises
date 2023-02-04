const readline = require('readline-sync');

const weight = readline.questionInt('Insert your weight: ');
const heigth = readline.questionFloat('Insert your heigth: ');

const bmi = weight / heigth ** 2;

switch (bmi > 0) {
  case bmi < 18.5:
    console.log('under weigth');
    break;
  case bmi >= 18.5 && bmi < 25:
    console.log('normal weigth');
    break;
  case bmi >= 25 && bmi < 30:
    console.log('over weigth');
    break;
  case (bmi >= 30 && bmi < 34, 9):
    console.log('obesity 1');
    break;
  case (bmi >= 35 && bmi < 39, 9):
    console.log('obesity 2');
    break;
  case bmi >= 40:
    console.log('obesity 3 and 4');
    break;
  default:
    console.log('hey');
    break;
}

console.log('hi the BMI is %s', bmi);
