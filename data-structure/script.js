"use strict";

const restaurant = {
  name: "classico italiano",
  location: "kaladi 7th street 23",
  categories: ["italian", "indian", "american"],
  startermenu: ["sharjah shake", "light lime", "garlic bread"],
  mainmenu: ["pizza", "pasta", "risotto"],
};

const arr = [2, 6, 8];

const a = arr[2];
const b = arr[1];
const c = arr[0];

console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);
