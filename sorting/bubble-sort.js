import {whereMagicHappens} from './sorting.js';
// function bubbleSort(arr){
//     for(var i=0;i<arr.length-1;i++){
//         for(var j=0;j<arr.length-i-1;j++){
//             console.log(arr[j].style.height);
//             if(arr[j]>arr[j+1]){
//                 swap(arr,j,j+1);
//             }
//         }
//     }
//     return arr;
// }
var arr=document.querySelectorAll(".bar").forEach(function(bar){
    height=bar.style.height;
    height=parseInt(height);
    arr.push(height);
});


console.log(arr)
function bubbleSort(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j].style.height>arr[j+1].style.height){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}


const bubble=document.querySelector(".bubbleSort");
bubble.addEventListener('click', function(){
    // disableAllBtn();
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
