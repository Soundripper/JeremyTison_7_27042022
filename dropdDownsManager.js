///////////////////////////////////////////////////////////////////////////////
// Dropdowns manager //
const dropBtns = document.querySelectorAll('.dropdown-toggle');
let dropDowns = document.querySelectorAll('.dropCollapse');
document.addEventListener("click", (e) => {
    if(e.target.classList.contains('dropdown-toggle')){
        dropDowns.forEach(e =>{
            if(e.classList.contains('show')){
                e.classList.toggle("show");
            }
        });
    }
    else {
        if( (e.target.classList.contains('dropdown-item')) || (e.target.classList.contains('searchAdv')) ){ }
        else {
            dropDowns.forEach(e => {
                e.classList.remove("show");
            })
        dropBtns.forEach(e => {
                e.classList.add("show");
            })
        }
    }
});
dropBtns.forEach(
    (elm) => elm.onclick = (e) => {
        // console.log(elm)
        dropBtns.forEach((elm) => 
        elm.classList[e.target === elm ? 'add' : 'add']("show")
        )
    }
)

// document.addEventListener('click', (e)=> {
//     console.log("Clicked element = ");
//     console.log(e.target);
// })