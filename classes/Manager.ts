import Employee from "./Employee";

class Manager extends Employee {
    private assignedEmployees: Employee[] = [];

    constructor(name: string, age: number, position: string, startDate: Date) {
        super(name, age, position, startDate);
    }

    addSubordinate(employee: Employee) {
        this.assignedEmployees.push(employee);
    }

}

export default Manager;