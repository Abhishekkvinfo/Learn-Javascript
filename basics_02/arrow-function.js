// const newLocal = function (birthyear) {
//     return 2024 - birthyear;
// };

// const calcage2 = birthyear=> 2024-birthyear;
// const age2 =calcage2(2007);
// console.log(age2);


const yearsuntilretirment =( birthyear , firstname) =>{

    const age = 2024 - birthyear;
    const retirment = 65 - age;
    // return retirment;
    return ` ${firstname} will retires after ${retirment} years`
}
console.log(yearsuntilretirment(1980,"abhishek"))
console.log(yearsuntilretirment(2001,"john"))
console.log(yearsuntilretirment(2004,"killer bean"))
console.log(yearsuntilretirment(2000," mr issac"))

// function calling other functions

function cutfruits (fruit ,pop){

    return fruit * 4;
}

function fruitprocessor(apples , oranges ,anar){

   const applejuice  = cutfruits(apples);
   const orangejuice = cutfruits(oranges);
   const anar1 = cutfruits(anar);

   const juice = `juice with ${apples} apples and ${oranges} oranges  and ${anar} anar. ${applejuice} pieces of apple ${orangejuice} pieces of orange and ${anar1}   `;
   return juice;
}
 
const output =  fruitprocessor(2,5,3);
console.log(output)
