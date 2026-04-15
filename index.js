// INITIALIZE the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect new button
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    // console.log(count)
}

function save(){
    let track = count + " - "
    saveEl.innerText += " " + track
    count = 0
    countEl.innerText = count
    console.log(count)
}

