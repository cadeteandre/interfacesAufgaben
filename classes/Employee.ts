import IEmployee from "../interfaces/IEmployee";

class Employee implements IEmployee {
    name: string;
    age: number;
    position: string;
    startDate: Date;

    constructor(name: string, age: number, position: string, startDate: Date) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.startDate = startDate;
    }

    getYearsOfService(): number {
        const dateNow = new Date;
        return  dateNow.getFullYear() - this.startDate.getFullYear()
    };
}

export default Employee;