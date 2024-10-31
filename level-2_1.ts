import Manager from "./classes/Manager";
import Subordinate from "./classes/Subordinate";

const subordinate_1 = new Subordinate('Lumara', 25);
const subordinate_2 = new Subordinate('Robson', 35);
const subordinate_3 = new Subordinate('Cassio', 30);

console.log(subordinate_1);
console.log(subordinate_2);
console.log(subordinate_3);

const manager_1 = new Manager('Waltson', 37);

console.log(manager_1);

manager_1.addSubordinate(subordinate_1);
manager_1.addSubordinate(subordinate_2);
manager_1.addSubordinate(subordinate_3);