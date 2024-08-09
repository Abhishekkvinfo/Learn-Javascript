
const massMark = 78;
const heightMark = 1.69;
const massJohn   = 92;
const heightJohn =1.95;

const BMIMARK = massMark / heightMark **2;
const BMIJOHN = massJohn / heightJohn **2;

console.log(BMIMARK,BMIJOHN)

const markhigherBMI = BMIMARK > BMIJOHN;

console.log(BMIMARK,BMIJOHN, markhigherBMI)