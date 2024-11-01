interface IIceCreamService {
    listFlavors: () => string[];
    orderIceCream: (flavor: string, scoops: number) => string;
    addNewFlavor: (flavor: string, price: number) => void;
    removeFlavor: (flavor: string) => void;
    isFlavorAvailable: (flavor: string) => boolean;
    getFlavorPrice: (flavor: string) => number | undefined;
}

export default IIceCreamService;