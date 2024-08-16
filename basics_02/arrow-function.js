// // const newLocal = function (birthyear) {
// //     return 2024 - birthyear;
// // };

// const calcage2 = birthyear=> 2024-birthyear;
// const age2 =calcage2(2007);
// console.log(age2);


const yearsuntilretirment = birthyear =>{

    const age = 2024 - birthyear;
    const retirment = 65 - age;
    return retirment;
}
console.log(yearsuntilretirment(2007))