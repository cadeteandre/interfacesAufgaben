import IceCream from "../classes/IceCream";
import IceCreamParlor from "../classes/IceCreamParlor";

const ChocolateIceCream = new IceCream('Chocolate', 2.30);
const StrawberryIceCream = new IceCream('Strawberry', 2.00);
const PistachioIceCream = new IceCream('Pistachio', 3.15);

const iceCreamOfSuccess = new IceCreamParlor();

iceCreamOfSuccess.addNewFlavor(ChocolateIceCream);
iceCreamOfSuccess.addNewFlavor(PistachioIceCream);
iceCreamOfSuccess.addNewFlavor(StrawberryIceCream);

console.log(iceCreamOfSuccess.listFlavors());
console.log(iceCreamOfSuccess);
console.log(iceCreamOfSuccess.orderIceCream('Vanilla', 4));
console.log(iceCreamOfSuccess.orderIceCream('Pistachio', 4));

iceCreamOfSuccess.removeFlavor('Strawberry');

console.log(iceCreamOfSuccess.isFlavorAvailable(StrawberryIceCream));

console.log(iceCreamOfSuccess.getFlavorPrice('Chocolate'));