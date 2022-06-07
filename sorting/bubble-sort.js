// import {whereMagicHappens,swap, deletePreviousBars,waitforme,disableAllBtn} from './sorting.js';

async function bubbleSort() {
    const ele=document.querySelectorAll(".bar");
    for(let i = 0; i <ele.length-1 ; i++) {
        for(let j = 0; j <ele.length-i - 1; j++) {
            ele[j].style.backgroundColor = "red";
            ele[j+1].style.backgroundColor = "red";

            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)) {
               await waitforme(delay);
                swap(ele[j],ele[j+1]);
            }
            ele[j].style.backgroundColor = "green";
            ele[j+1].style.backgroundColor = "green";

        }
            ele[ele.length-1].style.backgroundColor = "violet";
            ele[0].style.backgroundColor = "violet";
    }

    ele[ele.length-1].style.backgroundColor = "purple";

}



const bubble=document.querySelector(".bubbleSort");
bubble.addEventListener("click",()=>{
    bubbleSort();
    // disableAllBtn();
}
)



