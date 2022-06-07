async function insertion_sort(){
    const ele=document.querySelectorAll(".bar");
    for(let i = 1; i <ele.length; i++) {
        for(let j = i; j > 0; j--) {
            ele[j].style.backgroundColor = "red";
            ele[j-1].style.backgroundColor = "red";
            if(parseInt(ele[j].style.height) < parseInt(ele[j-1].style.height)) {
                await waitforme(delay);
                swap(ele[j],ele[j-1]);
            }
            ele[j].style.backgroundColor = "green";
            ele[j-1].style.backgroundColor = "green";
        }
            ele[0].style.backgroundColor = "violet";
    }
    ele[ele.length-1].style.backgroundColor = "purple";
}


const insert=document.querySelector(".insertionSort");
insert.addEventListener("click",()=>{
    console.log("insertion sort");
    insertion_sort();
    // disableAllBtn();
}
)