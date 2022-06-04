import {whereMagicHappens,swap, deletePreviousBars} from './sorting.js';
function bubbleSort(arr) {
    const ele=document.querySelectorAll(".bar");
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            ele[j].style.backgroundColor = "red";
            ele[j+1].style.backgroundColor = "red";

            if(arr[j] > arr[j+1]) {
                // waitforme(speed(speed));
               swap(arr, j, j+1);
            }
            ele[j].style.backgroundColor = "green";
            ele[j+1].style.backgroundColor = "green";

        }
            ele[ele.length-1].style.backgroundColor = "violet";
            ele[0].style.backgroundColor = "violet";
    }

    return arr;

}
//define arr
let arr = document.querySelectorAll(".bar").length;
console.log(arr);


const bubble=document.querySelector(".bubbleSort");
bubble.addEventListener("click",function(){
    whereMagicHappens();
    deletePreviousBars();
    bubbleSort(arr);
    whereMagicHappens();

});



const newArray=document.querySelector(".newArray");
newArray.addEventListener('click', function(){
    deletePreviousBars();
    whereMagicHappens();
    var arr=[];
    var bars=document.querySelectorAll(".bar");
    for(var i=0;i<bars.length;i++){
        arr.push(bars[i].style.height);
    }
    var arr=bubbleSort(bars);
    for(var i=0;i<arr.length;i++){
        bars[i].style.height=arr[i]; 
    }
    
}
);
