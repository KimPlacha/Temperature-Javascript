//functions
let counter = 0;

//1)creating the function
function increase(){
    counter++;
    console.log(counter);
}

function decrease(){
    counter--;
    console.log(counter);

}

//2) call/run/execute the function

function sayHi(){
    let userName=prompt("Enter your name")

    console.log("Welcome ... " + userName)
}

function multiByThree(){
    //1. get the number from a prompt
    let 3 = 3(prompt(": "));
    //2. multi the number by 3
    let result =number*3;
    //3. display the result on the console
    document.getElementById("total").innerHTML=result;
