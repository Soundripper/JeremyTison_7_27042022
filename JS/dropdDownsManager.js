///////////////////////////////////////////////////////////////////////////////
// Dropdowns manager //
const dropBtns = document.querySelectorAll('.dropdown-toggle');
let dropDowns = document.querySelectorAll('.dropCollapse');
document.addEventListener("click", (e) => {
    if(e.target.classList.contains('dropdown-toggle')){
        // dropDowns.forEach(e =>{
        //     if(e.classList.contains('show')){
        //         e.classList.toggle("show");
        //     }
        // });
        for (let i=0; i<dropDowns.length; i++){
            if(dropDowns[i].classList.contains('show')){
                dropDowns[i].classList.toggle("show");
            }
        }
    }
    else {
        if( (e.target.classList.contains('dropdown-item')) || (e.target.classList.contains('searchAdv')) ){ }
        else {
            for (let i=0; i<dropDowns.length; i++){
                    dropDowns[i].classList.remove("show");
            }
            // dropDowns.forEach(e => {
            //     e.classList.remove("show");
            // })
            for (let i=0; i<dropBtns.length; i++){
                dropBtns[i].classList.add("show");
            }
        }
        // dropBtns.forEach(e => {
        //         e.classList.add("show");
        //     })
        
        }
});

// dropBtns.forEach(
//     (elm) => elm.onclick = (e) => {
//         dropBtns.forEach((elm) => 
//         elm.classList[e.target === elm ? 'add' : 'add']("show")
//         )
//     }
// )
for (let i=0; i<dropBtns.length; i++){
    dropBtns[i].addEventListener("click", (e) => {
        for (let i=0; i<dropBtns.length; i++){
        dropBtns[i].classList[e.target === dropBtns[i] ? 'add' : 'add']("show")
        }
    })
};

// document.addEventListener('click', (e)=> {
//     console.log("Clicked element = ");
//     console.log(e.target);
// })