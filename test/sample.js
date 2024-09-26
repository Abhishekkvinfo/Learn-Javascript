// const btnclick = document.querySelector(".click");
// const background = document.querySelector("body");

// btnclick.addEventListener("click", function () {
//   background.style.backgroundColor = "green";
// });

"use strict";
const weekdays = [
  "mon",
  "Tuesday",
  " Wednesday",
  " Thursday",
  "Friday",
  " Saturday",
  "Sunday",
];
const openinghours = {
  [weekdays[0]]: {
    open: 0,
    close: 8,
  },
  tue: {
    open: 9,
    close: 8,
  },
  wed: {
    open: 11,
    close: 8,
  },
  sat: {
    open: 9,
    close: 8,
  },
  sun: {
    open: "closed",
    close: 8,
  },
  thu: {
    open: 9,
    close: 8,
  },
  fri: {
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
// optional chaining

console.log(restaurant.openinghours.mon?.open);
console.log(restaurant.openinghours.mon?.close);
console.log(restaurant.openinghours.tue?.open);

console.log(restaurant.openinghours.fri?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openinghours[day]?.open ?? "closed";
  console.log(`on ${day},we open at ${open}`);
}

console.log(restaurant.order?.(0, 2) ?? "item does not exist ");
console.log(restaurant.ordermethod?.() ?? "item does not exist ");

// looping object by using keys

const properties = Object.keys(openinghours);

for (const pro of properties) {
  console.log(pro);
}

console.log(`we are open ${properties.length} days`);
