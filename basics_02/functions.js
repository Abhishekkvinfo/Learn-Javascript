
'use strict'

// function logger(){

//     console.log("hello my name is abhishek")
// }

// logger();
// logger();

// //function declaration

// function fruitprocessor(apples , oranges){
//     console.log(apples , oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const apple = fruitprocessor(10,34);
// console.log(apple)

// const orange = fruitprocessor(22,99);
// console.log(orange)


// function calcage(birthyear){

//     return 2024-birthyear;

// }
// const age1 = calcage(2007);
// console.log(age1);


// //function expression
// const age2 = function(birthyear0){
// return 2024-birthyear0;

// }

// const age3 =age2(2005);

// console.log(age3)

// reviewing the topics about learned before....

// function
function calcage(birthyear){

    return 2024 - birthyear;
}

function yearsuntilretirement(birthyear , firstname){

    const age = calcage(birthyear);
    const retirement = 65 -age;
    return `${firstname} will retires after ${retirement} years ` 
}
const output = yearsuntilretirement(2002, "ABHISHEK KV")
console.log(output)

//function expression

const calcage1 = function(birthyear1){

    return 2024 - birthyear1;
}

const yearsuntilretirement1 = function(birthyear1 , name ){

    const age1 = calcage1(birthyear1);
    const retirement1 = 65 - age1;
    return `${name} will retires after ${retirement1} years ` 
}
const output1 = yearsuntilretirement1(1995, "John ");
console.log(output1)