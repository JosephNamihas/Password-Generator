// Generator a random number

function generateRandom(param){
    let randomNum = Math.floor(Math.random()*param+1) 
    return randomNum;
}

for (i = 0; i < 50; i++) {
var randomNumber = generateRandom(10);
console.log(randomNumber);
}