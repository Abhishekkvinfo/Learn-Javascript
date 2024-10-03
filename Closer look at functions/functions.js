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

const abhishek = {
  name: "abhishek kv",
  details: {
    flight: "LH888",
    passport: 789456123,
  },
};

const storedetails = [];

const flightnum = function (flightnum, passengername, passport) {
  abhishek.name = "MR" + abhishek.name.toUpperCase();
  if (passport === abhishek.details.passport) {
    alert("you have a standard 😂");
  } else {
    alert("you are a fraud");
  }
};
flightnum("swqnjk", "qwed", 789456123);
