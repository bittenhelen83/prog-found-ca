//Question 1
var car = "opel"

//Question 2
var person = {
    name: "Peter",
    age: 25
}

//Question 3
var outOfStock = true
if(outOfStock === true) {
    console.log("Out of stock")
}
else {
    console.log("In stock")
}

//Question 4
var numbersArray = [1,2,3,4,5]

for(var i=0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

//Question 5
for(var i = 15; i <=25; i++) {
    console.log(i);
}

//Question 6
for(var i = 15; i <=25; i++) {
    if(i === 20) {
        console.log(i);
    }
}

//Question 7
var person = [
	{
	name: "John",
	age: 56,
	male: true
	},
	{
	name: "Mary",
	age: 35,
	male: false
	}
];

for(var i=0; i < person.length; i++){
    console.log(person[i].age);
    console.log(person[i].male);}

//Question 8
function whatIDontLike(weather) {
    console.log("I don´t like " + weather)
}

whatIDontLike("rain")

//Question 9
function addingNumbers(numberOne, numberTwo) {
    var total = numberOne - numberTwo;
        console.log(total);
}

addingNumbers(10,5);

//Question 10
var emptyArray = [];

function addToArray(value) {
    emptyArray.push(value);
}

addToArray("Hey there");