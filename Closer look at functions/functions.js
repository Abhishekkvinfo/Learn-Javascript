// "strict";
// // a closer look at functions
// const bookings = [];
// const plane = function (flightname, noofpassengers = 1, price = 900) {
//   const booking = {
//     flightname,
//     noofpassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// plane("john");
// plane("abhshek");
// plane("donald");

// const abhishek = {
//   name: "abhishek kv",
//   details: {
//     flight: "LH888",
// //     passport: 789456123,
// //   },
// // };

// // const storedetails = [];

// // const flightnum = function (flightnum, passengername, passport) {
// //   abhishek.name = "MR" + abhishek.name.toUpperCase();
// //   if (passport === abhishek.details.passport) {
// //     alert("you have a standard 😂");
// //   } else {
// //     alert("you are a fraud");
// //   }
// // };
// // flightnum("swqnjk", "qwed", 789456123);
// // flightnum("nothing", "already defined", 789456123);

// // high order functions

// // const oneword = function (str) {
// //   return str;
// // };

// // const transformer = function (str, star, fn) {
// //   console.log(`transformed string:${fn(star)}`);
// // };

// // transformer("javascript is best", "dont mess with me", oneword);

// // // const high5 = function () {
// // //   console.log("hello");
// // // };

// // document.body.addEventListener("click", high5);

// // function returning functions

// // const greet = function (greetings) {
// //   return function (name) {
// //     console.log(`${greetings},${name} `);
// //   };
// // };
// // const greetingsde = greet("hey");

// // greetingsde("ABHISHERK");

// // const greetarr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// // greetarr("hi")("Abhishek");

// // the call and apply methods

// const airindia = {
//   airline: "Air india",
//   iatacode: "LH",
//   bookings: [],

//   book(flightnum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightnum}`
//     );
//     this.bookings.push({ flight: `${this.iatacode}${flightnum}`, name });
//   },
// };

// airindia.book(233, "Abhishek kv");
// // airindia.book(233, " shibu v");
// // airindia.book(233, "sambu pv");
// // airindia.book(233, "irfan kv");
// // airindia.book(233, "abu");

// // console.log(airindia.bookings);

// // apply call  methods

// const indiandream = {
//   airline: "indiandreams",
//   name: "",
//   iatacode: "XX",
//   bookings: [],
// };

// // const indiandreams = airindia.book;

// // indiandreams.call(indiandream, 222, "Hima");

// const qatarairways = airindia.book;

// const qatarairway = {
//   airline: "Qatar Airways",
//   name: "",
//   iatacode: "AA",
//   bookings: [],
// };

// // qatarairways.call(qatarairway, 897, "Abdul");

// // bind method

// const qatar = airindia.book.bind(qatarairway, 23);

// qatar("JONATHAN JAMES");
// qatar("JAMES");
// qatar("martha cooper");
// qatar("sony ");

//  poll application

const poll = {
  question: "what is your favourite programing language ?",
  options: ["0:Javascript", "1:python", "2:Rust", "3:C++"],
  answers: new Array(4).fill(0),

  registernewarry() {
    const answer = prompt(
      `${this.question}\n ${this.options.join("\n")}\n(write option number)`
    );
    console.log(answer);
  },
};
document
  .querySelector(".poll")
  .addEventListener("click", poll.registernewarry.bind(poll));
