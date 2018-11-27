var arraysOfNum = [2, 8, 5, 9, 3];

// Function to determine if element is odd or even
function evenNumbers(e) {
  if(e % 2 === 0) {
    console.log(e + " is even.");
  } else {
    console.log(e + " is odd.");
  }
};

// Function to print out arrays/data
function print(e){
  console.log(e);
};

function onlyEvenNumbers(e) {
    return e % 2 === 0;
};

function onlyOddNumbers(e) {
    return e % 2 === 1;
};


// Outputs array of only the even numbers
var evenArray = arraysOfNum.filter(onlyEvenNumbers);
evenArray.forEach(print);
console.log("-------")

// Outputs array of only the odd numbers
var oddArray = arraysOfNum.filter(onlyOddNumbers);
oddArray.forEach(print);
