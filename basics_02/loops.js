
// // for(let i=1; i <=10;i++){

// //     document.write(i)
// // }

// let person =[
//     "abhishek",
//     "aron",
//     'smilesh',
//     'appu',
//     'smilesh'
// ]

// for(let i=0; i<person.length;i++ ){
//     console.log(person[i],typeof person)
// }

const years =[1999,2007,2006,2002,2001,1947]
const ages =[];

for(let i=0; i<years.length;i++){

   ages.push( 2024 - years[i])
}
console.log(ages);


//backward looping 

const details =[
    "abhishek","smilesh","jonathan","jibair"
]

for(let i = details.length-1 ; i >=0;i--){

    console.log(i,details[i])
}

for(let exercise=1;exercise<4;exercise++){

    document.write(`starting exercise ${exercise}`)

    for(let rep=1;rep<=5;rep++){

        document.write(`pushup ${rep}`)
    }
}

//the while loop

let i = 1;

while(i<=10){

    console.log("hello");
    i++;
}