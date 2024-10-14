// const btnclick = document.querySelector(".click");
// const background = document.querySelector("body");

// btnclick.addEventListener("click", function () {
//   background.style.backgroundColor = "green";
// });

// "use strict";
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

// const airline = "AIR INDIA ";
// const airoplane = "A767";

// console.log(airline[0]);
// console.log(airline[1]);
// console.log(airline[2]);
// console.log(airline[3]);
// console.log(airline[4]);
// console.log(airline[5]);
// console.log(airline[6]);
// console.log(airline[7]);
// console.log(airline[8]);

// // index method

// console.log(airline.indexOf("A"));
// console.log(airline.lastIndexOf("A"));
// console.log(airline.slice(4, 7));

// //slice method

// const middleseat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "A" || s === "C") {
//     console.log(`you got middle seat`);
//   } else console.log("you are lucky");
// };

// middleseat("11A");
// middleseat("B1B");
// middleseat("C1C");
// // upper case lower case method
// const personname = "jOnas";
// console.log(personname);
// const tolowercase = personname.toLowerCase();
// const touppercase = tolowercase[0].toUpperCase() + tolowercase.slice(1);
// console.log(touppercase);

// const email = "abishekkvinfo@gmail.com";
// const compareemail = "  abishekkvinfo@gmail.com ";

// const crtemail = compareemail.toLowerCase().trim();
// console.log(crtemail);
// if (email === crtemail) {
//   console.log("This is a valid email ");
// }

// //replace method

// const indian = "282.98₹";
// const euro = indian.replace(".", ",").replace("₹", "€");
// console.log(euro);

// const something = "are you alone alone ??";
// const newsomething = something.replace(/alone/g, "lonely");
// console.log(newsomething);

// // includes method

// const airport = function (items) {
//   const package = items.toLowerCase();
//   if (
//     package.includes("gun") ||
//     package.includes("knife") ||
//     package.includes("gold")
//   ) {
//     console.log("you are not allowed to enter the country");
//   } else {
//     console.log("welcome to INDA!!");
//   }
// // };
// airport("i have a gun with two bullets ");
// airport("i have laptop and smartphone ");
// airport("i have  knife and apples ");
// airport("i have a bag with two bullets ");
// airport("i have gold");
// airport("i have candys ");

// split method

// console.log("ABHI+SHEK".split("+"));

//padding string

// const str = "jonas";
// console.log(str.padStart(25, "0"), str.slice(5).padEnd(25, "!"));

// const creditcard = function (number) {
//   const strr = number + "";
//   const last = strr.slice(-4);
//   return last.padStart(strr.length, "*");
// };

// console.log(creditcard(2867323678));

// array destructuring

const arr = [2, 4, 6];
// console.log(arr);

// const [x, y, z] = arr;
// console.log(x, x);
// console.log(x);
// console.log(z, x);
// console.log(y);

//spread operator

// console.log(...arr);

// const person = {
//   name: "anil",
//   job: "software engineer",
//   age: 22,
//   education: ["bsc computer science", "msc computer science"],
// };
// const education = person.education;
// console.log(...education);

// short  circuiting

//OR ||

console.log("john" || "");
console.log("" || "john");
console.log(0 || 0);

//AND

console.log("abhi" && 23);
console.log(23 && "abhi");
console.log(0 && 23);

//maps

const me = new Map();

me.set("ABHIshek", "KV");
console.log(me);

//sets

const set = new Set([1, 2, 3, 4, 566]);

console.log(set);

// working with strings

const string = "abhishek";

console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.slice(4));
