// // const newLocal = function (birthyear) {
// //     return 2024 - birthyear;
// // };

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