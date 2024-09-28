// const btnclick = document.querySelector(".click");
// const background = document.querySelector("body");

// btnclick.addEventListener("click", function () {
//   background.style.backgroundColor = "green";
// });

"use strict";
// const weekdays = [
//   "mon",
//   "Tuesday",
//   " Wednesday",
//   " Thursday",
//   "Friday",
//   " Saturday",
//   "Sunday",
// ];
// const openinghours = {
//   [weekdays[0]]: {
//     open: 0,
//     close: 8,
//   },
//   tue: {
//     open: 9,
//     close: 8,
//   },
//   wed: {
//     open: 11,
//     close: 8,
//   },
//   sat: {
//     open: 9,
//     close: 8,
//   },
//   sun: {
//     open: "closed",
//     close: 8,
//   },
//   thu: {
//     open: 9,
//     close: 8,
//   },
//   fri: {
//     open: 9,
//     close: 8,
//   },
// };

// const restaurant = {
//   name: "classico italiano",
//   location: "kaladi 7th street 23",
//   categories: ["italian", "indian", "american"],
//   startermenu: ["sharjah shake", "light lime", "garlic bread"],
//   mainmenu: ["pizza", "pasta", "risotto"],
//   openinghours,
//   order(starterindex, mainindex) {
//     return [this.startermenu[starterindex], this.mainmenu[mainindex]];
//   },
// };
// // // optional chaining

// // console.log(restaurant.openinghours.mon?.open);
// // console.log(restaurant.openinghours.mon?.close);
// // console.log(restaurant.openinghours.tue?.open);

// // console.log(restaurant.openinghours.fri?.open);

// // const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// // for (const day of days) {
// //   const open = restaurant.openinghours[day]?.open ?? "closed";
// //   console.log(`on ${day},we open at ${open}`);
// // }

// // console.log(restaurant.order?.(0, 2) ?? "item does not exist ");
// // console.log(restaurant.ordermethod?.() ?? "item does not exist ");

// // // looping object by using keys

// // const properties = Object.keys(openinghours);

// // for (const pro of properties) {
// //   console.log(pro);
// // }

// // console.log(`we are open ${properties.length} days`);

// // // looping object by using values entires

// // const value = Object.values(openinghours);

// // console.log(value);

// // const entire = Object.entries(openinghours);
// // console.log(entire);

// // for (const [day, { open, close }] of entire) {
// //   console.log(
// //     `on ${day} we open at ${open} and close ${close} and close at ${close}`
// //   );
// // }

// // // sets

// // const setorders = new Set(["1", "2"]);

// // console.log(setorders.delete("1"));
// // console.log(setorders.delete("2"));
// // console.log(setorders.add("3"));

// // console.log(new Set("abhishek"));

// // maps

// // defining map 1

// const maps = new Map();

// maps.set("name", "mandhio kada");
// maps.set("location", "edappal,kerala");
// maps.set("special item", "kuzhimandhi");
// maps.set("drinks", "coco cola ,mango juice , apple juice");
// maps.set(true, "we are open");
// maps.set(false, "we are closed !");
// maps.set("open", 10);
// maps.set("close", 12);
// console.log(maps);
// maps.get("name");
// console.log(maps.get("name"));
// console.log(maps.get("location"));
// console.log(maps.get("special item"));
// console.log(maps.get("drinks"));

// const time = 10;
// console.log(maps.get(time > maps.get("open") && time < maps.get("close")));
// console.log(maps);

// console.log(maps.size);
// console.log(maps.values("name"));

// // defining map instand of using set method

// const person = new Map([
//   ["name", "abhishek"],
//   ["job", "software dev"],
//   [1, "javascript"],
//   [2, "java"],
//   [true, 1],
// ]);
// console.log(person);

// for (const [key, value] of person) {
//   if (typeof key === Number) console.log(`answer is ${key} ${value}`);
// }

// const answer = Number(prompt("enter your answer"));
// console.log(answer);

// console.log(person.get(person.get(true) === answer));

// working with strings
// fundamentals of working with strings

const airline = "AIR INDIA ";
const airoplane = "A767";

console.log(airline[0]);
console.log(airline[1]);
console.log(airline[2]);
console.log(airline[3]);
console.log(airline[4]);
console.log(airline[5]);
console.log(airline[6]);
console.log(airline[7]);
console.log(airline[8]);

console.log(airline.indexOf("A"));
console.log(airline.lastIndexOf("A"));
console.log(airline.slice(4, 7));

const middleseat = function (seat) {
  const s = seat.slice(-1);
  if (s === "A" || s === "C") {
    console.log(`you got middle seat`);
  } else console.log("you are lucky");
};

middleseat("11A");
middleseat("B1B");
middleseat("C1C");
