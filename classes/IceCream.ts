import IIceCream from "../interfaces/IIceCream";

class IceCream implements IIceCream {
    flavor: string;
    price: number;
    isAvailable: boolean = true;

    constructor(flavor: string, price: number) {
        this.flavor = flavor;
        this.price = price;
    }
}

export default IceCream;