
'use strict'

function logger(){

    console.log("hello my name is abhishek")
}

logger();
logger();

//function declaration

function fruitprocessor(apples , oranges){
    console.log(apples , oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const apple = fruitprocessor(10,34);
console.log(apple)

const orange = fruitprocessor(22,99);
console.log(orange)


function calcage(birthyear){

    return 2024-birthyear;

}
const age1 = calcage(2007);
console.log(age1);


//function expression
const age2 = function(birthyear0){
return 2024-birthyear0;

}

const age3 =age2(2005);

console.log(age3)

