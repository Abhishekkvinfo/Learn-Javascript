"use strict";

const restaurant = {
  name: "classico italiano",
  location: "kaladi 7th street 23",
  categories: ["italian", "indian", "american"],
  startermenu: ["sharjah shake", "light lime", "garlic bread"],
  mainmenu: ["pizza", "pasta", "risotto"],
};

const arr = [2, 4, 3];

const [x, y, z] = arr;

console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);
