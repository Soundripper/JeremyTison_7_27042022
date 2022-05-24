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
// Gestionnaire Ajout Tags //
const tagClick = () => {
tagsWrapper = document.getElementById('filterBadges')
btnTags = document.querySelectorAll('.dropdown-item');
btnTags.forEach(e => {
    e.addEventListener('click', e => {
        const itemName = e.target.innerHTML;
        newBtn = document.createElement('span');
        if (e.target.classList.contains('ing')) {
            newBtn.innerHTML = `
            <button type="button" class="btn btn-primary position-relative me-2 mb-2 tag">
            <span> ${itemName} </span> &nbsp
            <i class="bi bi-x-circle"></i>
            </button>
        `
        }
        else if (e.target.classList.contains('app')) {
            newBtn.innerHTML = `
            <button type="button" class="btn btn-success position-relative me-2 mb-2 tag">
            <span> ${itemName} </span> &nbsp
            <i class="bi bi-x-circle"></i>
            </button>
        `
        }
        else if (e.target.classList.contains('ust')) {
            newBtn.innerHTML = `
            <button type="button" class="btn btn-danger position-relative me-2 mb-2 tag">
            <span> ${itemName} </span> &nbsp
            <i class="bi bi-x-circle"></i>
            </button>
        `
        }
        tagsWrapper.appendChild(newBtn)
        tagUpdate();
        e.target.remove();
    })
})
}

const tagUpdate = () => {
    tagsFiltering();
    activeTagsClose = document.querySelectorAll('.bi-x-circle');
    activeTagsClose.forEach(elt => {
        elt.addEventListener('click', (e) => {
            tagspan = e.target.parentNode.querySelector('span');
            tagName = tagspan.innerHTML;
            tagName = tagName.trim();
            // console.log(tagName);
            totalFilters = totalFilters.filter(item => item !== tagName);
            // console.log(totalFilters);
            e.target.parentNode.remove(e.target);
            tagsFiltering();
        })
    
})
}
tagClick();

///////////////////////////////////////////////////////////////////////////////
// Gestionnaire Tags FILTER//
const tagsFiltering = () => {
    let activeTags = document.querySelectorAll('.tag');
    if (activeTags.length > 0){
        console.log("sup à 0");
        activeTags.forEach(tag => {
            let Card = document.getElementsByClassName('card');
            let arrCards = Array.from(Card);
            tagName = tag.querySelector('span');
            tagInner = tagName.textContent;
            tagInner = tagInner.trim();
            totalFilters.push(tagInner);
            totalFilters = [...new Set(totalFilters)];
            totalFilters.forEach(tag => {
                console.log(tag);
                arrCards.forEach(Card => {
                    if(Card.innerHTML.toLowerCase().includes(tag.toLowerCase())){
                        Card.style.display = 'flex';
                    }
                    else {
                        Card.style.display = 'none';
                    }
                });
            })
        })
    }
    else {
        console.log("Pas sup à 0");
        let Card = document.getElementsByClassName('card');
        let arrCards = Array.from(Card);
        totalFilters.push(' ');
        totalFilters = [...new Set(totalFilters)];
        totalFilters.forEach(tag => {
                arrCards.forEach(Card => {
                    if(Card.innerHTML.toLowerCase().includes(tag.toLowerCase())){
                        Card.style.display = 'flex';
                    }
                    else {
                        Card.style.display = 'none';
                    }
                });
            })
        }
}



///////////////////////////////////////////////////////////////////////////////
// GENERAL FILTER Todo//
let totalFilters = []

///////////////////////////////////////////////////////////////////////////////
// Gestionnaire Input main FILTER//
// const inputGeneral = document.querySelector('.search_General');
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
// const generalSearchValue = (event) => {
//     let startDate = Date.now();
//     resultInput = event.target.value;
//     console.log(resultInput);
//     let elementsCard = document.getElementsByClassName('card');
//     let arrCards = Array.from(elementsCard);
//     // [...elements.forEach(element => {
//     arrCards.forEach(elementsCard => {
//             if(elementsCard.innerHTML.toLowerCase().includes(resultInput.toLowerCase())){
//                 elementsCard.style.display = 'flex';
//             }
//             else{
//                 elementsCard.style.display = 'none';
//             }
//     });
//     let endDate = Date.now();
//     console.log(endDate - startDate);
// }
// inputGeneral.addEventListener('input', generalSearchValue);


