// let totalFilters = [];

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
const tagClickListen = () => {
    filterBadgesWrapper = document.getElementById('filterBadgesWrapper');
    btnTags = document.querySelectorAll('.dropdown-item');
    btnTags.forEach(elt => {
        // console.log(elt);
        elt.addEventListener('click', (e) => {
            const itemName = e.target.innerHTML;
            const newBtn = document.createElement('span');
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
            e.target.remove();
            filterBadgesWrapper.appendChild(newBtn);
            console.log(newBtn);
            tagUpdate();
            
        })
    })
}

const tagUpdate = () => {
    // tagsFiltering();
    activeTagsClose = document.querySelectorAll('.bi-x-circle');
    // console.log(activeTagsClose);
    activeTagsClose.forEach(elt => {
        elt.addEventListener('click', (e) => {
            tagspan = e.target.parentNode.querySelector('span');
            // tagName = tagspan.innerHTML;
            let itemName = e.target.parentNode.querySelector('span').innerHTML;
            itemName = itemName.trim();
            // totalFilters = totalFilters.filter(item => item !== itemName);
            // console.log(totalFilters);
            if (e.target.parentNode.classList.contains('btn-primary')) {
                console.log(e.target.parentNode);
                wrapper = document.querySelector('.ingChoices');
                // console.log("Ingredient");
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-primary', 'bg-primary', 'text-light', 'ing');
                btn.innerHTML = itemName;
                console.log(itemName);
                wrapper.appendChild(btn);
            }
            else if (e.target.parentNode.classList.contains('btn-success')) {
                wrapper = document.querySelector('.appChoices')
                // console.log("Appareil");
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-success', 'bg-success', 'text-light', 'app');
                btn.innerHTML = itemName;
                console.log(itemName);
                wrapper.appendChild(btn);
            }
            else if (e.target.parentNode.classList.contains('btn-danger')) {
                wrapper = document.querySelector('.ustChoices');
                // console.log("Ustensile");
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-danger', 'bg-danger', 'text-light', 'ust');
                btn.innerHTML = itemName;
                console.log(itemName);
                wrapper.appendChild(btn);
            }
            e.target.parentNode.parentNode.remove();
            // tagsFiltering();
            tagClickListen();
        })
    
    })
}

tagClickListen();

///////////////////////////////////////////////////////////////////////////////
// Gestionnaire Tags FILTER//
const tagsFiltering = () => {
    let activeTags = document.querySelectorAll('.tag');
    if (activeTags.length > 0){
        // console.log("sup à 0");
        activeTags.forEach(tag => {
            let Card = document.getElementsByClassName('card');
            let arrCards = Array.from(Card);
            tagName = tag.querySelector('span');
            tagInner = tagName.textContent;
            tagInner = tagInner.trim();
            totalFilters.push(tagInner);
            totalFilters = [...new Set(totalFilters)];
            console.log(totalFilters);
            totalFilters.forEach(tag => {
                // console.log(tag);
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
        // console.log("Pas sup à 0");
        let Card = document.getElementsByClassName('card');
        let arrCards = Array.from(Card);
        totalFilters =[];
        totalFilters.push(' ');
        totalFilters = [...new Set(totalFilters)];
        console.log(totalFilters);
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


