"strict";
// a closer look at functions
const bookings = [];
const plane = function (flightname, noofpassengers = 1, price = 900) {
  const booking = {
    flightname,
    noofpassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

plane("guhan");
plane("guhan");
plane("guhan");
