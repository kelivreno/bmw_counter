# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```
or

Visit the [Live Demo](https://bmwcounter.netlify.app/)
# Things I learned while building this (personal notes): 

## Variables:
- `let count = 0` = (in english terms) let count be zero.
- you print a statement with `console.log(count)`
- Js reads from top to bottom, and if you intialized your variable after a print statement ex:

```js
console.log(myAge)

let myAge = 20
```
- (cont.) it will just produce a reference error

## Mathematical Operators:
- +,-,/,*
- just represent numbers with variables most of the time so that it is easy to understand, ex:
```js
// 1. Create two variables, myAge and humanDogRatio
let myAge = 23
let humanDogRatio = 7
// 2. Multiply the two together and store the result in myDogAge 
let myDogAge = myAge*humanDogRatio
// 3. Log myDogAge to the console
console.log(myDogAge)
```

## Reassignment and Increment:

- With the `let` statement, you can reasign different values to a variable 
- `<button id="increment-btn" onclick="increment()"> ` - use the `onclick` as way to activate a certain function from the script.js. 

## Functions: 
```js
function increment(){
    console.log("This button was clicked")
}
```
- increment is the name of the function
- Functions are use to write less code, to make it easy for humans to read
- Anything within the scope like variables, you can't call outside of it, only within the scope of the function. 
- Any variables stated outside of the function is considered global, because you can access it anywhere
- naming convention: camelCase, (first word small case, second word starts with capital letter)

## Displaying the count:
- `let countEl = document.getElementById("count-el")` = hey HTML document could you get me an element with an ID of count-el?
- represent the value from the html to countEl, so that we can add it. 

## Document Object Model (DOM):
- how you use JS to modify a website
- Document: Interacting with the HTML document
- Object: the Document keyword in JS is of the data type object; they took the HTML document and shoved it into a JS Object
- Model: is how you represent that html into JS

## Strings: 
- You cannot have a string with both one quote or double quotes, ex: `let username = 'per"`. 
- As much as possible, you make something complicated into a variable, so that's it's not messy in the `console.log()`
- If a number is met with a string, it will automatically become a string, as string always wins. ex: `console.log(4+"5")` it will output 45, instead of 9
- Concatenate trick: `welcomeEl.innerText += "👋"`, to add stuff to the end your string

## Misc:
- The `<script src="script.js"></script>` needs to be at the bottom, so that the js file can scan the whole document