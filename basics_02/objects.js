
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


const john = {
     
    firstname:"abhishek",
    birthyear:2007,

    calcage3: function(){
        this.age = 2024 - this.birthyear;
        return this.age ;
    }
};

console.log(john.calcage3());
console.log(john.age)
