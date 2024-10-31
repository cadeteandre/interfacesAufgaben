import IceCream from "../classes/IceCream";

interface IIceCreamService {
    listFlavors: () => string[];
    orderIceCream: (flavor: string, scoops: number) => string;
    addNewFlavor: (flavor: IceCream) => void;
    removeFlavor: (flavor: string) => void;
    isFlavorAvailable: (flavor: IceCream) => boolean;
    getFlavorPrice: (flavor: string) => number | undefined;
}

export default IIceCreamService;