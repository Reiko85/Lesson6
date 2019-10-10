document.addEventListener("DOMContentLoaded",function() {
    console.log("Tere");

/*let hello = "Hello World";
console.log(hello);
let rangeStart = 1;
let rangeEnd = 100;
let  numberToCheck = 61;
let inRange = false;


for(let i = rangeStart; i <= rangeEnd; i++){
    if(numberToCheck === i){
        InRange = true;
        break;
    }
}*/

/*if(InRange){
    console.log("The number is in range");

}else {
    console.log("The umber is out of range");

}*/
//Ternary Operator

/*let result = inRange ? "InRange" : "Out Of Range";
console.log(result);*/

//Write a program to display multiplication table of a given number
//Test data
//number: 5
//Expected Output
//5 x 1 = 5;
//5 x 2 = 10;
//...
/*let number = 5;

for(let i = 1; i <= 10; i++){
    let string = `${number} x ${i} = ${number * i}`;
    console.log(string);





 //console.log(number, "x", i, "=",nnumber*i);




}*/
 let stringLength;
 let string = "Hello World!";
 stringLength = string.length;
 console.log(stringLength);

 /*for(let i = 0;i<12; i++){
     console.log(string[i]);


 }*/
 /*for(let i = string.length-1; i>= 0; i--){

     console.log(string[i]);

 }*/

for(let i = 0;i < 12;i++){

    if(string[i]=== 'o' ){
        console.log('*');
    }else{
        console.log(strinG[i];


    }
    let replace = string.replace('o','*');
    console.log(replace)
    
}

});
