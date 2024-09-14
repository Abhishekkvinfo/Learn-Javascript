"use strict";

const restaurant = {
  name1: "classico italiano",
  place: "kaladi 7th street 23",
  categories: ["italian", "indian", "american"],
  startermenu: ["sharjah shake", "light lime", "garlic bread"],
  mainmenu: ["pizza", "pasta", "risotto"],
  openinghours: {
    mon: {
      open: "9:00AM",
      close: "8:00PM",
    },
  },
  order: function (starterindex, mainindex) {
    return [this.startermenu[starterindex], this.mainmenu[mainindex]];
  },

  orderdelivery: function (restaurant) {
    console.log(restaurant);
  },
};

// const arr = [2, 6, 8];

// const a = arr[2];
// const b = arr[1];
// const c = arr[0];

// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = main;
// // console.log(main, secondary)

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starterindex, mainindex] = restaurant.order(2, 0);

// console.log(starterindex, mainindex);

// const nested = [1, 3, 4, [3, 5]];

// const [p, , r, [j, k]] = nested;

// console.log([p, j, k]);

// const [s = 1, h = 1, l = 7] = [7, 8];

// console.log(s, h);

// const { name1, categories, place, openinghours } = restaurant;
// console.log(name1, categories, location);

// const { name1: myname, categories: cate, place: kaladi } = restaurant;

// console.log(myname, cate, kaladi);

// let q = 111;
// let w = 222;

// const Obj = {
//   q: 23,
//   w: 33,
// };
// ({ q, x } = Obj);
// console.log(q, w);