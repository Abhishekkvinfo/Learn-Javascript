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
  orderpasta: function (ing1, ing2, ing3) {
    console.log(`here is your tasty pasta with ${ing1},${ing2}, and ${ing3}`);
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

// const { name, categories, openinghours } = restaurant;
// console.log(name, categories, openinghours);

// const {
//   name: restaurantname,
//   categories: tags,
//   openinghours: workinghours,
// } = restaurant;
// console.log(restaurantname, tags, workinghours);

// // default values
// const { menu = [], startermenu = [] } = restaurant;

// console.log(menu, startermenu);

// // mutatating variables

// let a = 111;
// let b = 222;
// const obj = { a: 12, b: 33, c: 44 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects

// const {
//   mon: { open: o, close: c },
// } = openinghours;
// console.log(o, c);

// restaurant.orderdelivery({
//   name: "classico italiano",
//   starterindex: 2,
//   mainindex: 2,
//   address: "kaladi",
// });

// const arr = [7, 9, 5];

// const newarr = [1, 2, ...arr];

// console.log(newarr);
// console.log(...newarr);

// // join arrays using spread operator ..

// const join = [...restaurant.mainmenu, ...restaurant.startermenu];
// console.log(join);

// // copying  array using spread operator

// const copy = [...restaurant.mainmenu];
// console.log(copy);

// //strings using spread operator

// const str = "kim boy";
// const letters = [...str];
// console.log(letters);
// console.log(...str);

// const ing = [
//   // prompt("lets make pasta! ingredient 1 ?"),
//   // prompt("ingredient 2 ?"),
//   // prompt("ingredient 3 ?"),
// ];
// console.log(ing);

// restaurant.orderpasta(...ing);

// const newrestaurant = { ...restaurant };
// console.log(newrestaurant);

// newrestaurant.name = "teashore";
// console.log(newrestaurant.name);
// console.log(restaurant.name);

// //rest pattern and parameters

// const [x, y, ...others] = [1, 2, 3, 4, 5];
// console.log(x, y, others);

// const [pizza, , risotto, ...otherfood] = [
//   ...restaurant.mainmenu,
//   ...restaurant.categories,
// ];

// console.log(pizza, risotto, otherfood);

// const fun = function (main, ...optonal) {
//   console.log(main);
//   console.log(optonal);
// };
// fun("onion", "ginger", "tomato");

// short circuiting(&&,||)AND OR
console.log(3 || "abhi");
console.log("abhi" || 3);
console.log(0 || "abhi");
console.log(null || undefined);
console.log(undefined || null);

console.log(restaurant.name || 10);

restaurant.orderpasta && restaurant.orderpasta("onion", "chilly");

if (restaurant.orderpasta) {
  restaurant.orderpasta("onion", "cheese");
}

console.log(0 && "hello");
console.log("hello" && 0);
console.log(1 && 19);
console.log(undefined && null);

restaurant.guest = 0;
const crtvalue = restaurant.guest ?? 10;
console.log(crtvalue);
