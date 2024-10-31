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

    addNewFlavor(flavor: IceCream): void {
        this.flavors.push(flavor);
        console.log(`${flavor.flavor} ice cream flavor has been added`);
    };

    removeFlavor(flavor: string): void {
        this.flavors.forEach((elt) => elt.flavor === flavor ? elt.isAvailable = false : null);
    };

    isFlavorAvailable(flavor: IceCream): boolean {
        if(flavor.isAvailable) {
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