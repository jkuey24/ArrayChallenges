
//Our two arrays.
var b = [3, 6, 34, 22, 18];
var c = [-70, 56, -2, 88, 3];
//

var b = [3, 6, 34, 22, 18]; //We declared an array and found the max number//so it goes through each element in the array and plugs into the function, since its .each then it only returns the best answer that suites the function the best.

var max=0; //max is at zero because we want to find the largest number that is at least greater than zero since zero is the lowest positive number. we can also do -Infinity if all the numbers in the array are negatives. (that would probably be the better thing to do)

b.forEach (function(e)
{
  if (e > max)
  {
    max =e
  }
  console.log(max);
})
//puts each element from the array into the function. so if we plug in 3, it is currrenntly greater than zero so it is now the new max number, then we move to 6 which becomes the new max number, we then go to 34 which now becomes the new max. since 34 is the largest number in the array, it is the max number so it is printed to the screen.



//Find the lowest number from array b.
var low=100;

b.forEach (function(e)
{
   if (e < low)

   {
     low =e
   }
   console.log(low);
})

//Find the Lowest Number
var c = [-70, 56, -2, 88, 3];

c.forEach (function(e)
{
  if (e < low)
  {
    low = e
  }
  console.log(e);
})

//Makes array positive by using Math.abs
c.map (function(e)
{
  return Math.abs(e);
})

//using map to change the original array
c = c.map (function(e) {return Math.abs(e);})

var a = [1.3, 1.9, 7.6, 3.01, 2.1];
var closestToZero = 10;

a.forEach(function(e) {
 if (closestToZero > e){
   closestToZero = e;}
   console.log (closestToZero)
 });



 //Find the smallest number (closest to zero). We first set variable min to infinity. then run it.
var c = [-70, 56, -2, 88, 3];

function smallest(c) //this function is called smallest and takes in a parameter name of c which means that it requires c to carry out the function
{
var min=Infinity; //because we need a mumber bigger than any element in the array to compare against

c.forEach( function minNumber(element) //so we use c (which is a variable for an array on the top...and we plug in that array 'c')
{
  if (Math.abs(element) < Math.abs(min))
{
  return (min = element);
  console.log("min is now: " + min);
}
});

return min;
}



//Calculate the Sum(Fancy)
var sum = c.reduce(function(a, b) { return a + b; }, 0);
//Calculate the Sum(normal)
sum=0;

c.forEach (function(e) {sum = sum + e} ); console.log(sum)


function sumOfarray(array)
{
  var sum1=0;
  array.map(function(e)
  {
    sum1= sum1 + e
  });
  console.log(sum1)
}

function sumOfarray(array)
{
  var sum=0;
  array.forEach
  (function(e)
  {
    sum = sum + e
  }
);
sum;
sum/(array.length);

console.log(sum);

}
___________________________________


//Calculate the Mean Value
var f = [1, 2, 3, 4]
sum=0;

f.forEach (function(e) {sum = sum + e} ); sum; sum/(f.length);


//function form
function mean(f)
{
  sum=0;
  f.forEach(function(e){sum = sum+e}); sum; return sum/(f.length);

}
mean(f);


//Find the index of the highest number.
var c = [-70, 56, -2, 88, 3];

var max=0;

c.forEach (function(e) { if (e > max){max =e} console.log(c.indexOf(max));}
)


c.forEach(function(e){if (e>min) {min=e} console.log(c.indexOf(min));}


//Creat an array with sibling names
var names= ["John","Josh", "Eric", "Cam", "Peyton"]

var parentsNames= ["Mike", "Karen", "Bianca", "Mark", "Diane"]


names.concat(parentsNames);


names.concat(parentsNames);
["Cam", "Eric", "John", "Josh", "Peyton", "Bianca", "Diane", "Karen", "Mark", "Mike"]

//combine arrays
var newArray = names.concat(parentsNames);

newArray.sort(); //alphabeticalize

newArray.reverse();
["Peyton", "Mike", "Mark", "Karen", "Josh", "John", "Eric", "Diane", "Cam", "Bianca"]

//create a function that returns all the names in reverse alphabetical order in one string
newArray.

function combinedNames()
{console.log(names.concat(parentsNames).sort().reverse().join());}


// This finds out if a value is in the array
function checkAvailability(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
}
//Find position name in array
console.log($.inArray( 'vikash', nameList ));



//Magic 8 Ball game

function didUserEnterStop(userInput) {
  return userInput.toLowerCase() === "stop";
}




//Create an array with the following answers: Yup!, Fuhgeddaboudit, Maybe, Ask: what would your mother do?, Ask: what would an Australian do, then do the opposite, Your answer here.

function askSingleQuestion() {

var answers = ["Yup!","Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here"];

//Input a question from the user.

var question = prompt("Your question:");

//if question is not "stop" give an answer
if (!didUserEnterStop(question)) {

//Create a random number to select one of the answers (hint: use Math.random() and change the magnitude).

    var randomIndex = Math.floor(Math.random()*answers.length);

//Output the question with the random answer.

    var fullAnswer = question + "Your answer: " + answers[randomIndex];
    alert(fullAnswer);
}
  return question;
};

//Put the question and answer into a loop that stops when the user enters STOP.
function playGame(){
do {
  //empty -- all the logic is in the question function
  } while(!didUserEWnterSTop(askSingleQuestion()));
];
