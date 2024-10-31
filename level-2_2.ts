import Manager from "./classes/Manager";
import Trainee from "./classes/Trainee";

const date_1 = new Date;
date_1.setFullYear(2023);

const date_2 = new Date;
date_2.setFullYear(2024);

const date_3 = new Date;
date_3.setFullYear(2014);


const trainee_1 = new Trainee('Bob', 18, 'Trainee', date_1);
const trainee_2 = new Trainee('Thiago', 32, 'Trainee', date_2);
const manager_1 = new Manager('Giana', 40, 'Manager', date_3);

manager_1.addSubordinate(trainee_1);
manager_1.addSubordinate(trainee_2);
console.log(manager_1);

console.log(`${trainee_1.name} has been with the company for ${trainee_1.getYearsOfService()} year(s).`);
console.log(`${trainee_2.name} has been with the company for ${trainee_2.getYearsOfService()} year(s).`);
console.log(`${manager_1.name} has been with the company for ${manager_1.getYearsOfService()} year(s).`);
