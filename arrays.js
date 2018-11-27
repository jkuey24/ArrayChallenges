var digits = [24.5, 2.5, -0.6, -1.2, -10.4, 30.4, 5.9, 7.0, 20.6];
var max = digits[0];
var min = digits[0];
var sum = 0;

// Function for finding highest number in array.
function highest(e) {
  if(e>max){
    max = e;
  }
}

// Function for finding the lowest number
function lowest(e) {
  if(e<min){
    min = e;
  }
}

// Function for finding the number closest to zero
function closestToZero(e) {
  if(e*e < smallest) {
    smallest = e;
  }
}

// Function for the sum of all numbers in array
function sumOfAll(e) {
  sum += e;
}

// Other function for sum of an array but here you can call the function and pass the array in as an argument
function sumOfArray(array) {
  var sum1 = 0;
  array.forEach( function(e){ sum1 += e; });
  console.log("Sum of array is : " + sum1);
}



// Runs function for highest number in array
digits.forEach(highest);
console.log("Max is :" + max);

// Runs function for lowest number in array
digits.forEach(lowest);
console.log("Min is :" + min);

// Runs function for finding the number closest to zero
var smallest = max;
digits.forEach(closestToZero);
console.log("Smallest is :" + smallest);

// Runs the function for finding the sum of all numbers in array
digits.forEach(sumOfAll);
console.log("Sum of all is :" + sum);

// Sum of the array
sumOfArray([1,2,10,4,5]);

// Finds mean of the numbers in the array
console.log("Mean is :" + sum/digits.length);

//Gets the index of the highest number
console.log("Index of the highest number is :" + digits.indexOf(max));
