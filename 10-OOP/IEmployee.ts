// `Interface`: Employee
// `Attributes`:
//     - registration: número do registro
//     - salary: valor do salário
//     - admissionDate: data de admissão
// `Methods`:
//     - generateRegistration: retorna uma string única gerada como registro

export default interface IEmployee {
  _registration: string;
  _salary: number;
  _admissionDate: Date;

  generateRegistration(): string;
}
