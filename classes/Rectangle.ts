import IShape from "../interfaces/IShape";

class Rectangle implements IShape {
    name: string;
    color: string;
    width: number;
    height: number;
    isRound: boolean = false;

    constructor(name: string, color: string, width: number, height: number) {
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
    }

    public draw(): void {
        console.log('drawing rectangle');
    }
}

export default Rectangle;