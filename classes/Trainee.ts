import Employee from "./Employee";

class Trainee extends Employee {
    constructor(name: string, age: number, position: string, startDate: Date) {
        super(name, age, position, startDate);
    }
}

export default Trainee;