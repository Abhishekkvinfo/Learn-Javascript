let am = 1;

let q = 1;
// fix me

console.log("hello world");

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, max);
  return max - min;
};
const amplitude = calcTempAmplitude([22, 42, 12]);
console.log(amplitude);
