export function whereMagicHappens(){
    console.log('whereMagicHappens');
    createNewArray();
    disableAllBtn();
  
}
//eneable and disable all buttons
function disableAllBtn(){
    // document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}
//speed of sorting
function speedOfSorting(speed){
    for(var i=0;i<speed;i++){
        console.log(i);
        return 1000/speed;
    }
  
}

function speed(speed){
    var speed = speed;
    var speed = speed*1000;
    return speed;
}

let arraySize = document.querySelector("#arraySize");
//increase or decrease the size of the array
arraySize.addEventListener('change', function(){
    //this deletes the previous bars and creates new ones
    deletePreviousBars();
    createNewArray(arraySize.value);
    whereMagicHappens();
}
);

//this is what creates those bars
function createNewArray(numberOfBars=16){
    for(var i=0;i<numberOfBars;i++){//--------------------------------------------------------------this is what creates those bars randomly
       document.querySelector("#bars").innerHTML += '<div class="bar" style="height:'+Math.floor(Math.random()*100)+'px"></div>';
    }

}
//this will delete the previous bars will use it when sorting
export function deletePreviousBars(){
    var bars = document.querySelectorAll(".bar");
    for(var i=0;i<bars.length;i++){
        bars[i].remove();
    }
}

export  function swap(arr,a,b){
    var temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

//delay
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}



