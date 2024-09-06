"use strict";

const restaurant = {
  name1: "classico italiano",
  place: "kaladi 7th street 23",
  categories: ["italian", "indian", "american"],
  startermenu: ["sharjah shake", "light lime", "garlic bread"],
  mainmenu: ["pizza", "pasta", "risotto"],
  order: function (starterindex, mainindex) {
    return [this.startermenu[starterindex], this.mainmenu[mainindex]];
  },
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

// const temp = main;
// main = secondary;
// secondary = main;
// console.log(main, secondary)

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starterindex, mainindex] = restaurant.order(2, 0);

console.log(starterindex, mainindex);

const nested = [1, 3, 4, [3, 5]];

const [p, , r, [j, k]] = nested;

console.log([p, j, k]);

const [s = 1, h = 1, l = 7] = [7, 8];

console.log(s, h);

const { name1, categories, place } = restaurant;
console.log(name1, categories, location);
