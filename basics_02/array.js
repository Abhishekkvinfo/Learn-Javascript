

//const friends = ['Abhishek','Arjun','Ashok','salini','neha','Irfan','sanjay']

//console.log(friends);

const persons = new Array('Abhishek', 'Arjun', 'Ashok', 'salini', 'neha', 'Irfan', 'sanjay')

console.log(persons)

const yearss = [1, 3, 2, 4, 6, 7, 7, 6, 35, 43, 34, 45, 53, 55, 35, 65, 656, 3, 35553, 5, 35, 535, 553, 5, 3, 25, 6, 34, 464]


const year = new Array(1, 3, 2, 4, 6, 7, 7, 6, 35, 43, 34, 45, 53, 55, 35, 65, 656, 3, 35553, 5, 35, 535, 553, 5, 3, 25, 6, 34, 464)

console.log(year[1])

//friends[2] ='Emliy'
// console.log(friends)


const calcage = function (birthyear) {

    return 2024 - birthyear;
}

const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007];

const age1 = calcage(years[0]);
const age2 = calcage(years[1])
const age3 = calcage(years[2])
const age4 = calcage(years[3])
const age5 = calcage(years[4])
const age6 = calcage(years[5])
const age7 = calcage(years[6])
const age8 = calcage(years[7])
console.log(age1, age2, age3, age4, age5, age6, age7, age8)


//add
const homies = ["Arjun", "Abhi", "Irfan", "Nithin", "Jose"]

homies.push("AVANTI")
console.log(homies)

homies.unshift("sonnali")
console.log(homies)

//remove

homies.shift();
console.log(homies)

homies.pop();
console.log(homies)

console.log(homies.indexOf("Irfan"))

console.log(homies.includes("Abhi"))
console.log(homies.includes("bob"))

if (homies.includes('Abhi')) {
    console.log("yah abhi is your friend ")
}

const Array1 = ["abhishek", 30, "jose"]

console.log(Array1);
