

const scoreDolphins =(500+108+89)/3;
const scoreKoalas =(501+108+89)/3;

console.log(scoreDolphins,scoreKoalas);

if (scoreDolphins>scoreKoalas){

    console.log("Dolphins win the trophy ")
}
else if(scoreKoalas>scoreDolphins){

    console.log("Koalas win the trophy ")   
}
else if (scoreDolphins === scoreKoalas && scoreDolphins >=95 && scoreKoalas >=95){

    console.log("score of dolphines and koalas are equal")
}else{

    console.log("both are lost")
}