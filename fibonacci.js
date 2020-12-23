//data science application programming excercise
//UWM Masters Science in data science
//Daniel Forero
//input two numbers (m and n)
//find mth Fibonacci number
//find the nth Fibonacci number
//get greatest common factor between the two Fibonacci numbers


// set up 
var m;
var n;
var gcf;
const readInput = require("readline");

const enterNum = readInput.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Enter the two integers
console.log('Please enter two integers');
enterNum.question('enter the first integer ? ', function(numM) {
    enterNum.question('enter the second integer ? ', function(numN) {

        //get the Fibonacci numbers
        m = getFibonacci(numM);
        n = getFibonacci(numN);

        console.log(`The  ${numM}th Fibonacci number is ${m}`);
        console.log(`The  ${numN}th Fibonacci number is ${n}`);
  
        //Find the greatest common factor between the two Fibonacci numbers
        gcf = findGCF(m,n);
        console.log(`The greatest common factor between ${m} and ${n} is ${gcf}`);

        enterNum.close();
    })});

//close up
enterNum.on("close", function() {
    console.log('\nBYE BYE !!!');
    process.exit(0);
});

 //function to find the correct number in the Fibonacci sequence
 function getFibonacci(x) {
    //create array with the first two Fibonacci numbers
    let arr = [0, 1];
  
    //Handle if one of the first two Fibonacci numbers
    if (x <= 2) return 1;
  
    //loop through building the Fibonacci array
    for (let i = 2; i < x; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
  
     }
    //Return the last Fibonacci calculated
    return arr[x - 1];
 };
 
 //Function to find the greatest common factor
 function findGCF(number1,number2) {
    //loop through from 1 until the higher of the two numbers
    for (let i = 1; i <= number1 && i <= number2; i++) {

        // check if is factor of both integers using Modulus operator
        if( number1 % i == 0 && number2 % i == 0) {
            inGCF = i;
        }
    }
  return inGCF;
 };