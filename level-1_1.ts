import Circle from "./classes/Circle";

const circle_1 = new Circle('circle', 'yellow', 20);
const circle_2 = new Circle('circle', 'black', 50);
const circle_3 = new Circle('circle', 'blue', 15);

circle_1.draw();
circle_2.draw();
circle_3.draw();
console.log(circle_1, circle_2, circle_3);