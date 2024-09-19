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
  orderdelivery: function (obj) {
    console.log(obj);
  },
};

// const arr = [2, 4, 3];
// const [x, y, z] = arr;

// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// switching variables

// main = secondary;
// secondary = main;

// console.log(main, secondary);
//receive 2 return values from a function

// const [starter, maincourse] = restaurant.order(0, 2);
// console.log(starter, maincourse);

//nested destructuring

// const nested = [2, 5, [2, 4]];

// const [i, , [j, h]] = nested;
// console.log(i, j,h);

//default values

// const [p = 1, q = 1, r = 1] = [2, 7];
// console.log(p, q, r);

//object destructuring...

const { name, categories, openinghours } = restaurant;
console.log(name, categories, openinghours);

const {
  name: restaurantname,
  categories: tags,
  openinghours: workinghours,
} = restaurant;
console.log(restaurantname, tags, workinghours);

// default values
const { menu = [], startermenu = [] } = restaurant;

console.log(menu, startermenu);

// mutatating variables

let a = 111;
let b = 222;
const obj = { a: 12, b: 33, c: 44 };

({ a, b } = obj);
console.log(a, b);

// nested objects

const {
  mon: { open: o, close: c },
} = openinghours;
console.log(o, c);

restaurant.orderdelivery({
  name: "classico italiano",
  starterindex: 2,
  mainindex: 2,
  address: "kaladi",
});

const arr = [7, 9, 5];

const newarr = [1, 2, ...arr];

console.log(newarr);
