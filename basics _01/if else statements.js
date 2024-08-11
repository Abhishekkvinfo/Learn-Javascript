
const age = 17;

if(age >=18){

    console.log("you are eligible for driving license")
}

else{
    
    const yearsleft = 18 - age;
    console.log(`you are too young wait for ${yearsleft} years  `)
}

const birthyear = 2007;

let century;
if(birthyear <=2000){

    century = 20;
}
else{
    century =21;
}

console.log(century)