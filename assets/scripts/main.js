const num1 =40
const num2 =34


function Addition(x,y){
    return x+y
}


function Substract(x,y){
    return x-y
}


function Multiply(x,y){
    return x*y
}

function Division(x,y){
    return x/y
}

function Exponent(x,y){
    return x**y
}



function modulus(x,y){
    return x%y
}

console.log(Addition(num1, num2))
console.log(Substract(num1, num2))
console.log(Multiply(num1, num2))
console.log(Division(num1, num2))
console.log(Exponent(num1, num2))
console.log(modulus(num1, num2))


for(let x=1;x<=100; x++){
    if(x%2 !==0){
    console.log(x)
    }
    
}