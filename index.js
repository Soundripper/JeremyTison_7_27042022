///////////////////////////////////////////////////////////////////////////////
// Gestionnaire Input main FILTER//
const inputGeneral = document.querySelector('.search_General');
// Boucle For //
//     const updateValue = (event) => {
//     let startDate = Date.now();
//     resultInput = event.target.value;
//     let elements = document.getElementsByClassName('card');
//     for(let i = 0; i<elements.length; i++){
//         if(elements[i].innerHTML.toLowerCase().includes(resultInput.toLowerCase())){
//             elements[i].style.display = 'flex';
//         }
//         else{
//             elements[i].style.display = 'none';
//         }
//     }
//     let endDate = Date.now();
//     console.log(endDate - startDate);
// }

// Boucle forEach //
const generalSearchValue = (event) => {
    let startDate = Date.now();
    resultInput = event.target.value;
    let elementsCard = document.getElementsByClassName('card');
    let arrCards = Array.from(elementsCard);
    // [...elements.forEach(element => {
    arrCards.forEach(elementsCard => {
            if(elementsCard.innerHTML.toLowerCase().includes(resultInput.toLowerCase())){
                elementsCard.style.display = 'flex';
            }
            else{
                elementsCard.style.display = 'none';
            }
    });
    let endDate = Date.now();
    console.log(endDate - startDate);
}
inputGeneral.addEventListener('input', generalSearchValue);

///////////////////////////////////////////////////////////////////////////////
// Gestionnaire Input advanced FILTER//
const dropMenus = document.querySelectorAll('.dropCollapse');
// console.log(dropMenus);
dropMenus.forEach(dropMenu =>{
    const advSearch = dropMenu.querySelectorAll('.searchAdv')
    const advSearchValue = (event) => {
        const tagItems = dropMenu.querySelectorAll('.dropdown-item')
        resultInput = event.target.value;
        console.log(resultInput)
        const arrAdv = Array.from(tagItems);
        console.log(tagItems);  
        arrAdv.forEach(elementsAdv => {
            if(elementsAdv.innerHTML.toLowerCase().includes(resultInput.toLowerCase())){
                elementsAdv.style.display = 'flex';
            }
            else{
                elementsAdv.style.display = 'none';
            }
        });
    }
    advSearch.forEach(e => {
        e.addEventListener('input', advSearchValue)
    })
    
})    

///////////////////////////////////////////////////////////////////////////////
// Gestionnaire Tags //
tagsWrapper = document.getElementById('filterBadges')
btnTags = document.querySelectorAll('.dropdown-item');
btnTags.forEach(e => {
    e.addEventListener('click', e => {
        const ingName = e.target.innerHTML;
        newBtn = document.createElement('span');
        if (e.target.classList.contains('ing')) {
            newBtn.innerHTML = `
            <button type="button" class="btn btn-primary position-relative me-2 mb-2 tag">
            ${ingName} &nbsp
            <i class="bi bi-x-circle"></i>
            </button>
        `
        }
        else if (e.target.classList.contains('app')) {
            newBtn.innerHTML = `
            <button type="button" class="btn btn-success position-relative me-2 mb-2 tag">
            ${ingName} &nbsp
            <i class="bi bi-x-circle"></i>
            </button>
        `
        }
        else if (e.target.classList.contains('ust')) {
            newBtn.innerHTML = `
            <button type="button" class="btn btn-danger position-relative me-2 mb-2 tag">
            ${ingName} &nbsp
            <i class="bi bi-x-circle"></i>
            </button>
        `
        }
        tagsWrapper.appendChild(newBtn)
        tagUpdate();
        e.target.remove();
    })
})
const tagUpdate = () => {
    tagsFiltering();
    activeTagsClose = document.querySelectorAll('.bi-x-circle');
    activeTagsClose.forEach(e => {
        e.addEventListener('click', (e) => {
            e.target.parentNode.remove(e.target);
            tagUpdate();
        })
})
}

///////////////////////////////////////////////////////////////////////////////
// Gestionnaire Tags FILTER//
const tagsFiltering = () => {
    let tagsFilters = []
    let activeTags = document.querySelectorAll('.tag')
    console.log(activeTags);
    activeTags.forEach(tag => {
        tagInner = tag.innerHTML;
        tagsFilters.push(tagInner);
        console.log(tagsFilters);
    })
}




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
        dropBtns.forEach((elm) => 
        elm.classList[e.target === elm ? 'add' : 'add']("show")
        )
    }
)

