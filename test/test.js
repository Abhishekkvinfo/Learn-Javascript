"use strict";

const restaurant = {
  name: "classico italiano",
  location: "kaladi 7th street 23",
  categories: ["italian", "indian", "american"],
  startermenu: ["sharjah shake", "light lime", "garlic bread"],
  mainmenu: ["pizza", "pasta", "risotto"],
  openinghours: {
    mon: {
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
  },
  order: function (starterindex, mainindex) {
    return [this.startermenu[starterindex], this.mainmenu[mainindex]];
  },
};

const arr = [2, 4, 3];
const [x, y, z] = arr;

console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables

main = secondary;
secondary = main;

console.log(main, secondary);
//receive 2 return values from a function

const [starter, maincourse] = restaurant.order(0, 2);
console.log(starter, maincourse);

//nested destructuring

const nested = [2, 5, [2, 4]];

const [i, , [j, h]] = nested;
console.log(i, j, h);

//default values

const [p = 1, q = 1, r = 1] = [2, 7];
console.log(p, q, r);

//object destructuring...
