export function whereMagicHappens(){
    console.log('whereMagicHappens');
    speedOfSorting(1);
    createNewArray();
    disableAllBtn();
    swap(arr,a,b);
}
//eneable and disable all buttons
function disableAllBtn(){
    document.querySelector(".bubbleSort").disabled = true;
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
    deleteChild();
    createNewArray(arraySize.value);
}
);

//this is what creates those bars
function createNewArray(numberOfBars=16){
    for(var i=0;i<numberOfBars;i++){//--------------------------------------------------------------this is what creates those bars randomly
       document.querySelector("#bars").innerHTML += '<div class="bar" style="height:'+Math.floor(Math.random()*100)+'px"></div>';
    }

}
//this will delete the previous bars will use it when sorting
function deleteChild(){
    var child = document.querySelector("#bars");
    while (child.firstChild) {
        //removeChild is a internal function of the DOM ig in node
        child.removeChild(child.firstChild);
    }

}
function swap(arr,a,b){
    var temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}
