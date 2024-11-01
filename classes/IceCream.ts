import IIceCream from "../interfaces/IIceCream";

class IceCream implements IIceCream {
    flavor: string;
    price: number;
    isAvailable: boolean = true;
    description?: string;

    constructor(flavor: string, price: number, description?: string) {
        this.flavor = flavor;
        this.price = price;
        this.description = description ?? `${this.flavor} ice cream`;
    }
}

export default IceCream;