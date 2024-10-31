import IShape from "../interfaces/IShape";

class Circle implements IShape {
    name: string;
    color: string;
    radius: number;
    isRound: boolean = true;

    constructor(name: string, color: string, radius: number) {
        this.name = name;
        this.color = color;
        this.radius = radius;
    }

    public draw(): void {
        console.log('Drawing circle');
    }
}

export default Circle;