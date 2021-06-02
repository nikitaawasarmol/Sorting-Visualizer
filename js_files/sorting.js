let arraySize = document.querySelector('#arr_sz');

let array = [];


createNewArray();

function createNewArray(noOfBars = 50) {
   
    array = [];
    for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
}
console.log(array)

const bars = document.querySelector('#bars');

for(let i = 0; i < noOfBars; i++) {
const bar = document.createElement("div");
 bar.style.height = `${array[i] * 2.7}px`;
 bar.classList.add('bar');
bar.classList.add('flex-item');
bars.appendChild(bar);
}
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function() {
    console.log("from newarray" + arraySize.value);
    // console.log("form newarray" + delay);
})

