const myHouseholdMembers = 2;
const myHomeSize = 4;
const myFoodChoices = 16;
const myWaterConsumption = 1;
const myHouseholdPurchases = 2;
const myWasteProduction = 5;
const myRecycle = 12;
const myTransportation = 10;

const Total = myHouseholdMembers + myHomeSize + myFoodChoices + myWaterConsumption + myHouseholdPurchases + myWasteProduction + myRecycle + myTransportation;

const myHeading = document.querySelector("h2");
myHeading.textContent = Total;