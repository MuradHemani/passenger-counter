
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let history = count + " - "
    saveEl.textContent += history;
    console.log(count);
}

function reset() {
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = "Previous enteries:";

}

