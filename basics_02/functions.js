
'use strict'

function logger(){

    console.log("hello my name is abhishek")
}

logger();
logger();

function fruitprocessor(apples , oranges){
    console.log(apples , oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const apple = fruitprocessor(10,34);
console.log(apple)

const orange = fruitprocessor(22,99);
console.log(orange)