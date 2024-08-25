
// const abhishek ={
//     firstname:"abhishek",
//     lastname:"kv",
//     age:2024-2007,
//     job:"javascript developer",
//     friends:["nithin",'abhishek',"irfan","arjun"]
// }
// console.log(abhishek);

// console.log(abhishek.age);
// console.log(abhishek.firstname);
// console.log(abhishek.friends);
// console.log(abhishek.lastname);

// console.log(abhishek['age']);
// console.log(abhishek['firstname']);
// console.log(abhishek['lastname']);
// console.log(abhishek.friends);

// console.log(abhishek)
// const name1 = "name"

// console.log(abhishek['first' + name1])
// console.log(abhishek['last' + name1])

// const interestedin = prompt("what do you want to know about abhishek firstname,job,lastname,friends,age")
// if(abhishek[interestedin]){
// document.write(abhishek[interestedin])
// }else{
//     console.log("wrong request")
// }

// const jonas ={
//     friends:['michael','arjun',"abhi",'anil']
// }
// console.log(jonas.friends[0]);


// const john = {

//     firstname: "abhishek",
//     birthyear: 2006,
//     hasdriverslicense: true,

//     calcage3: function () {
//         this.age = 2024 - this.birthyear;
//         return this.age;
//     },
//     getsummery: function () {

//         return `${this.firstname} has ${this.hasdriverslicense ? 'a' : 'no'} drivers license and he is ${this.age} years old `
//     }
// };

// console.log(john.calcage3());
// console.log(john.age)

// console.log(john.getsummery())

const mark = {

    fullname:"mark miller",
    mass:78,
    height:1.69,

    calcbmi:function(){

        this.bmi =this.mass/this.height **2;
        return this.bmi;

    }
}
const john ={

    fullname:"john smith",
    mass:92,
    height:1.95,

    calcbmi:function(){

        this.bmi =this.mass/this.height **2;
        return this.bmi;
    }
};
mark.calcbmi()
john.calcbmi()
if(mark.bmi > john.bmi){

    console.log(`${mark.fullname} BMI (${mark.bmi}) is higher than ${john.fullname} BMI (${john.bmi})!`)
}else{

    console.log(`${john.fullname} BMI (${john.bmi}) is higher than ${mark.fullname} BMI (${mark.bmi})!`)
}