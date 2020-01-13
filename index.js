const name = "Nikki Zareen";
const name2 = "Alex Cameron"
let name3 = "Harry Crane"
let counter = 0


const intList = Object.freeze([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
]);

const names = Object.freeze([
  "Alex",
  "Jacob",
  "Harry",
  "Claudia",
  "Huw",
  "Antonio",
  "Todor",
  "Niel"
]);

const books = Object.freeze({
  "0743477553": "Othello",
  "0743482778": "Twelfth Night",
  "0743477103": "Macbeth",
  "0743477561": "The Merchant of Venice",
  "0743477545": "A Midsummer Nights dream",
  "074347712X": "Hamlet",
  "0137829124": "Romeo and Juliet",
  "074348276X": "King Lear",
  "074347757X": "The Taming of The Shrew",
  "0743484878": "Henry V"
});

// challange 0.1
// write a function which returns the length of a string

// challange 0.2
// write a fucntion which returns a string in all upercase letters

// challange 0.3
// write a function which returns a string in all lowercase letters

// challange 0.4
// write a function which returns a string in reverse

// challange 0.5
// write a function which removes the last n letters of a string

// I would like you to write a series of pure functions which will demonstrate some core principles in javascript
// for all intents and purposes, do not attempt mutate the above constants
// simply return a new value with the desired result from your functions
// I have frozen the above data stuctures so you are not tempted to mutate them
// each function should be fully tested
// each function should be fully documented
// after each challange, commit your code to the repository using git

// challange 1
// write a function which can generate an array of n consecutive integers

// challange 2
// write a function to reverse intList

// challange 3
// write a function which multiplies every element of intList by 10

// challange 4
// write a function which filters out all even integers from intList

// challange 5
// write a function which filters out all names that contain the letter e from names

// challange 6
// write a function that will remove an element from a list
// for example write a function which will remove `Niel` from names

// challange 7
// write a function that will add an element to the end of a list
// for example write a function to add 'Nikki to names'

// challange 8
// write a function which will return the a book title when passed in an ISBN
// think about what could happen if you input an invalid ISBN

// challange 9
// write a function which will return an array of ISBN's from the books object

// challange 10
// write a function which will return an array of book names from the object of books

// challange 11
// write a function which will filter the hash map of books by book name

// challange 11
// write a function which will filter the hash map of books by ISBN

// challange 12 (very hard for a beginner)
// want to bet I didn't actually get shakespeares books with real ISBN's????
// well we can check using the google books api.
// write a function which when given an ISBN, will retrive the follwing pieces of information:
// publisher
// publishing date
// title
// page count
// rating
// image (if exists)
// you do not have to do tdd for this function.
// below is the endpoint you have to hit
// https://www.googleapis.com/books/v1/volumes?q=isbn:<ISBN>
// you should implement this using the node standard library
// after we finish I will show you how to simplify this problem using a third part library called centra
// for some extra fun I'll show you how we can write the data we've recived onto our local machine
// and if we have time serve it up to our browser using a restful API

// time permitting I will give you an introduction into react, and we can display our book data to the browser in a pretty way
