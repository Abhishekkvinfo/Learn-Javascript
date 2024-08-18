
const calcage1 = function (birthyear1) {

    return 2024 - birthyear1;
}

const yearsuntilretirement1 = function (birthyear1, name) {

    const age1 = calcage1(birthyear1);
    const retirement1 = 65 - age1;
    if (retirement1 <=0) {

        console.log("already been retired");
        return retirement1;
    }
    else {

    
        return `${name} will retires after ${retirement1} years`
    }
}

const output3 =yearsuntilretirement1 (1959, "abhishek")
console.log(output3)