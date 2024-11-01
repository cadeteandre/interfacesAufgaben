import IceCreamParlor from "../classes/IceCreamParlor";

//todo ------------------- Creating the ice cream parlor -------------------
const iceCreamOfSuccess = new IceCreamParlor();

//? ------------------- Setting the first flavors -------------------
iceCreamOfSuccess.addNewFlavor('Chocolate', 2.30);
iceCreamOfSuccess.addNewFlavor('Pistachio', 3.50);
iceCreamOfSuccess.addNewFlavor('Strawberry', 2.30);

console.log(iceCreamOfSuccess);

console.log(iceCreamOfSuccess.orderIceCream('Vanilla', 4));
console.log(iceCreamOfSuccess.orderIceCream('Pistachio', 4));

//* ------------------- Selecting elements from DOM -------------------

const selectAllFlavors = document.querySelector('#allFlavors') as HTMLSelectElement;
const inputFlavor = document.querySelector('#inputFlavor') as HTMLInputElement;
const inputPrice = document.querySelector('#inputPrice') as HTMLInputElement;
const addFlavorBtn = document.querySelector('#addFlavorBtn') as HTMLButtonElement;
const removeFlavorBtn = document.querySelector('#removeFlavorBtn') as HTMLButtonElement;
const checkPriceBtn = document.querySelector('#checkPriceBtn') as HTMLButtonElement;
const showResults = document.querySelector('#showResults') as HTMLElement;

//* ------------------- Declaring functions -------------------
const showAllFlavors = (): void => {
    selectAllFlavors.innerHTML = '';
    const flavors: string[] = iceCreamOfSuccess.listFlavors();
    flavors.forEach((flavor) => {
        const optionFlavor = document.createElement('option') as HTMLOptionElement;
        optionFlavor.setAttribute('value', flavor);
        if(iceCreamOfSuccess.isFlavorAvailable(flavor)) {
            optionFlavor.innerText = `🍦 ${flavor} 🟢`;
        } else {
            optionFlavor.innerText = `🍦 ${flavor} 🔴`;
        }
        selectAllFlavors.appendChild(optionFlavor);
    })
}

const addFlavor = () => {
    const flavor = inputFlavor.value;
    const price = Number(inputPrice.value);

    if(flavor === '') {
        console.error('Please, type a flavor');
    } else {
        iceCreamOfSuccess.addNewFlavor(flavor, price);
        showAllFlavors();
    }
}

const removeFlavor = () => {
    const flavor = inputFlavor.value;

    if(flavor === '') {
        console.error('Please, type a flavor');
    } else {
        iceCreamOfSuccess.removeFlavor(flavor);
        showAllFlavors();
    }
}

const checkPrice = () => {
    const flavor = inputFlavor.value;
    showResults.innerHTML = '';

    if(flavor === '') {
        console.error('Please, type a flavor');
    } else {
        const iceCreamPrice = iceCreamOfSuccess.getFlavorPrice(flavor);
        const priceContainer = document.createElement('div');
        priceContainer.innerHTML = `<p>${flavor} ice cream costs ${iceCreamPrice?.toFixed(2)} €</p>`;
        showResults.appendChild(priceContainer);
    }
}

//* ------------------- Calling the functions -------------------
showAllFlavors();
addFlavorBtn.addEventListener('click', addFlavor);
removeFlavorBtn.addEventListener('click', removeFlavor);
checkPriceBtn.addEventListener('click', checkPrice);