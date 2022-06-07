async function mergeSort(){
    const ele=document.querySelectorAll(".bar");
    let left = 0;
    let right = ele.length - 1;
    await mergeSortHelper(ele, left, right);
    ele[ele.length-1].style.backgroundColor = "purple";

}
async function mergeSortHelper(ele, left, right){
    if(left < right){
        let middle = Math.floor((left + right)/2);
        await mergeSortHelper(ele, left, middle);
        await mergeSortHelper(ele, middle+1, right);
        await merge(ele, left, middle, right);
    }
}
async function merge(ele, left, middle, right){
    let leftArr = [];
    let rightArr = [];
    for(let i = left; i <= middle; i++){
        leftArr.push(ele[i]);
    }
    for(let i = middle+1; i <= right; i++){
        rightArr.push(ele[i]);
    }
    leftArr.push(Infinity);
    rightArr.push(Infinity);
    let i = 0;
    let j = 0;
    for(let k = left; k <= right; k++){
        if(leftArr[i].offsetHeight < rightArr[j].offsetHeight){
            ele[k].style.backgroundColor = "red";
            await waitforme(delay);
            ele[k].style.backgroundColor = "green";
            await waitforme(delay);
            swap(ele[k],leftArr[i]);
            i++;
        }
        else{
            ele[k].style.backgroundColor = "red";
            await waitforme(delay);
            ele[k].style.backgroundColor = "green";
            await waitforme(delay);
            swap(ele[k],rightArr[j]);
            j++;
        }
    }
}
const mergeSortBtn=document.querySelector(".mergeSort");
mergeSortBtn.addEventListener("click",()=>{
    mergeSort();
    // disableAllBtn();
}
)
