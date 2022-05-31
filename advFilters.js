let totalFilters = [];

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
const tagClickInit = () => {
    console.log("tagClickInit");
    filterBadgesWrapper = document.getElementById('filterBadgesWrapper');
    btnTags = document.querySelectorAll('.dropdown-item');
    btnTags.forEach(elt => {
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
            console.log(newBtn);
            tagCloseAdd(newBtn);
            e.target.remove();
            filterBadgesWrapper.appendChild(newBtn);
        })
    })
}

const tagClickAdd = (newBtn) => {
    // tagsFiltering();
    console.log("tagClickAdd");
    newBtn.addEventListener('click', (e) => {
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
            tagCloseAdd(newBtn);
            e.target.remove();
            filterBadgesWrapper.appendChild(newBtn);
            // tagsFiltering();
        })
    }

const tagCloseAdd = (btn) => {
    // tagsFiltering();
    console.log("tagCloseAdd");
    btn.addEventListener('click', (e) => {
            let itemName = e.target.parentNode.querySelector('span').innerHTML;
            itemName = itemName.trim();
            if (e.target.parentNode.classList.contains('btn-primary')) {
                wrapper = document.querySelector('.ingChoices');
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-primary', 'bg-primary', 'text-light', 'ing');
                btn.innerHTML = itemName;
                wrapper.appendChild(btn);
                tagClickAdd(btn);
            }
            else if (e.target.parentNode.classList.contains('btn-success')) {
                wrapper = document.querySelector('.appChoices')
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-success', 'bg-success', 'text-light', 'app');
                btn.innerHTML = itemName;
                console.log(itemName);
                wrapper.appendChild(btn);
                tagClickAdd(btn);
            }
            else if (e.target.parentNode.classList.contains('btn-danger')) {
                wrapper = document.querySelector('.ustChoices');
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-danger', 'bg-danger', 'text-light', 'ust');
                btn.innerHTML = itemName;
                console.log(itemName);
                wrapper.appendChild(btn);
                tagClickAdd(btn);
            }
            e.target.parentNode.parentNode.remove();
            // tagsFiltering();
            
        })
        
}

tagClickInit();

///////////////////////////////////////////////////////////////////////////////
// Gestionnaire Tags FILTER//
const tagsFiltering = () => {
    console.log("tagsFiltering");
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
