
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
  count++; // Increment count by 1
  console.log(count);
  document.getElementById("count-el").textContent = count;
}

const button = document.getElementById("increment-btn"); // Get the button element
//button.addEventListener("click", increment); // Add click event listener

function save () {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}