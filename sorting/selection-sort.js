async function selectionSort(){
    const ele=document.querySelectorAll(".bar");
    for(let i = 0; i <ele.length-1 ; i++) {
        let min=i;
        await waitforme(delay);
        for(let j = i+1; j <ele.length; j++) {
            ele[j].style.backgroundColor = "red";
            ele[min].style.backgroundColor = "yellow";
            if(parseInt(ele[j].style.height) < parseInt(ele[min].style.height)) {
                min=j;
            }
            ele[j].style.backgroundColor = "green";
            ele[min].style.backgroundColor = "yellow";
            if(min!=i){
                await waitforme(delay);
                swap(ele[i],ele[min]);
            }
        }
      
        ele[i].style.backgroundColor = "violet";
        ele[min].style.backgroundColor = "purple";
    }
    ele[ele.length-1].style.backgroundColor = "purple";

}

const selectionSortBtn=document.querySelector(".selectionSort");
selectionSortBtn.addEventListener("click",()=>{
    selectionSort();
    // disableAllBtn();
}
)