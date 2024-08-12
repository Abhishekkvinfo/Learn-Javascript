

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMARK = massMark / heightMark ** 2;
const BMIJOHN = massJohn / heightJohn ** 2;

console.log(BMIMARK, BMIJOHN)

if (massMark > massJohn) {

    console.log(`marks bmi is ${BMIMARK} which is greater than johns bmi johns bmi is ${BMIJOHN}` )
}
else {

    console.log(`johns bmi is ${BMIJOHN} which is greater than mark marks bmi is ${BMIMARK} `)
}