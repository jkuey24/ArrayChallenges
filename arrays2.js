var siblingArray = ["Jake", "Johnny", "Jenny"];
var parentArray = ["Lisa", "Steve"];


// Function to print out arrays/data
function print(e){
  console.log(e);
};

// Function that combines the two function functionName()
function combineNames() {
  console.log(siblingArray.concat(parentArray).sort().reverse().join());
};

// Function to serach the arrays for a name
function searchName(str) {
  var nameIndex = siblingArray.concat(parentArray).indexOf(str);

  if(nameIndex >= 0){
    console.log(str + " is part of the family!");
  } else {
    console.log( str + " is not part of the family!")
  }
}

// Outputs each name of sibling array alphabetically
siblingArray.sort().forEach(print);
console.log("-------");

// Outputs each name of parent array in reverse order
parentArray.sort().reverse().forEach(print);
console.log("-------");

// Outputs both arrays together
siblingArray.concat(parentArray).sort().forEach(print);
console.log("-------");

// Outputs both arrays in reverse
siblingArray.concat(parentArray).sort().reverse().forEach(print);
console.log("-------");

// outputs both arrays
combineNames();
console.log("-------");

// Outputs return of search function
searchName("Nat");
searchName("Lisa");
