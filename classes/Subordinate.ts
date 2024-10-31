import Employee from "./Employee";

class Subordinate extends Employee {

    constructor(name: string, age: number, position: string, startDate: Date) {
        super(name, age, position, startDate)
    }
}

export default Subordinate;