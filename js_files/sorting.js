// pushing number of bars
let arraySize = document.querySelector('#arr_sz');
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});
var arr = [];
createNewArray();

function createNewArray() {
while(arr.length < 100){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

const bars = document.getElementById('#bars');

for(let i = 0; i < 100; i++) {
const bar = document.createElement("div");
bar.style.height = `${arr[i] * 2}px`
bar.classList.add('bar');
bar.classList.add(`barNo${i}`);
bar.classList.add('flex-item');
}
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function() {
    createNewArray(arraySize.value)
    console.log(newArray)
})


/*let array = [];
array = [];
for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
}
console.log(array) */