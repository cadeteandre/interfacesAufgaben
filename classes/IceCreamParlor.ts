import IIceCreamService from "../interfaces/IIceCreamService";
import IceCream from "./IceCream";

class IceCreamParlor implements IIceCreamService {
    private flavors: IceCream[] = [];

    listFlavors(): string[] {
        const flavorArr: string[] = this.flavors.map((flavor): string => flavor.flavor);
        return flavorArr;
    }

    orderIceCream(flavor: string, scoops: number): string {
        const order = this.flavors.find((elt) => elt.flavor === flavor);
        if(order?.isAvailable) {
            return `Order successful: ${scoops} scoop(s) of ${flavor} ice cream`;
        } else {
            return `Sorry, ${flavor} ice cream is not available`;
        }
    }

    addNewFlavor(flavor: string, price: number): void {
        const existentIceCream = this.flavors.find((elt) => elt.flavor === flavor);
        if(existentIceCream) {
            existentIceCream.isAvailable = true;
        } else {
            const iceCreamToAdd = createIceCreamFlavor(flavor, price);
            this.flavors.push(iceCreamToAdd);
            console.log(`${flavor} ice cream flavor has been added`);
        }
    };

    removeFlavor(flavor: string): void {
        this.flavors.forEach((elt) => elt.flavor === flavor ? elt.isAvailable = false : null);
    };

    isFlavorAvailable(flavor: string): boolean {
        const existentIceCream = this.flavors.find((elt) => elt.flavor === flavor);
        if(existentIceCream?.isAvailable) {
            return true;
        } else {
            return false;
        }
    }

    getFlavorPrice(flavor: string): number | undefined {
        const iceCream = this.flavors.find((elt) => elt.flavor === flavor);
        return iceCream?.price;
    }
}

export default IceCreamParlor;

const createIceCreamFlavor = (flavor: string, price: number): IceCream => {
    const newIceCreamFlavor = new IceCream(flavor, price);
    return newIceCreamFlavor;
}