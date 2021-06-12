function swap(element1, element2) {
    console.log('in swap function');

    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;

}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let arraySize = document.querySelector('#arr_sz');


// update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// input for waitforme function (260ms)
let delay = 260;

let delayElement = document.querySelector('#speed_input');

//  update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});
let array = [];


createNewArray();

function createNewArray(noOfBars = 50) {

    deleteBar();
   
    array = [];
    for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
}
console.log(array)

const bars = document.querySelector('#bars');

for(let i = 0; i < noOfBars; i++) {
const bar = document.createElement("div");
 bar.style.height = `${array[i] * 2}px`;
 bar.classList.add('bar');
bar.classList.add('flex-item');
bar.classList.add(`barNo${i}`);
bars.appendChild(bar);
}
}

function deleteBar() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function() {
    console.log("from newarray" + arraySize.value);
    console.log("form newarray" + delay);

    createNewArray(arraySize.value);
})

