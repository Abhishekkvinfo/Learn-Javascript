let am = 1;

let q = 1;
// fix me

console.log("hello world");

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }

  console.log(max);
};
calcTempAmplitude([22, 14, 18]);

const calcTempAmlitude = function (temp) {
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] < min) min = temp[i];
  }
  console.log(min);
};
calcTempAmlitude([22, 42, 12]);
