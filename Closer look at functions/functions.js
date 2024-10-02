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

const flight = "LH234";
const abhishek = {
  name: "abhishek",
  passport: 12343456,
};

const checkin = function (flightnum, passenger) {
  flightnum = "LH999";
  passenger = abhishek.name = "Mr " + abhishek.name;
  if (abhishek.passport === 12343456) {
    alert("CHECKED IN");
  } else {
    alert("Wrong passport");
  }
};
checkin(flight, abhishek);
console.log(flight);
console.log(abhishek);
