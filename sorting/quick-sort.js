function quickSort(arr, left, right){
    if(left < right){
        let pivot = partition(arr, left, right);
        quickSort(arr, left, pivot-1);
        quickSort(arr, pivot+1, right);
    }
}
function partition(arr,left,right){
    let pivot = arr[right];
    let i = left;
    for(let j=left;j<right;j++){
        if(arr[j] < pivot){
            swap(arr,i,j);
            i++;
        }
    }
    swap(arr,i,right);
    return i;
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
