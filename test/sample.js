// const btnclick = document.querySelector(".click");
// const background = document.querySelector("body");

// btnclick.addEventListener("click", function () {
//   background.style.backgroundColor = "green";
// });

"use strict";
const weekdays = ["mon"];
const openinghours = {
  [weekdays[0]]: {
    open: 9,
    close: 8,
  },
  tue: {
    open: 9,
    close: 8,
  },
  wed: {
    open: 9,
    close: 8,
  },
};
const restaurant = {
  name: "classico italiano",
  location: "kaladi 7th street 23",
  categories: ["italian", "indian", "american"],
  startermenu: ["sharjah shake", "light lime", "garlic bread"],
  mainmenu: ["pizza", "pasta", "risotto"],
  openinghours,
  order(starterindex, mainindex) {
    return [this.startermenu[starterindex], this.mainmenu[mainindex]];
  },
};

console.log(restaurant.openinghours.mon?.open);
console.log(restaurant.openinghours.mon?.close);
console.log(restaurant.openinghours.tue?.open);

console.log(restaurant.openinghours.fri?.open);
