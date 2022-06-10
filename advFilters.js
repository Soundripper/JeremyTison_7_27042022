class AdvFilters{
    constructor(subject){
        this.subject = subject;
        this.filterBadgesWrapper = null;
        this.btnTags = null;
        this.itemName = null;
    }
    ///////////////////////////////////////////////////////////////////////////////
    // Gestionnaire Input advanced FILTER//
    advFiltersSearchBar = () => {
        const dropMenus = document.querySelectorAll('.dropCollapse');
        // console.log(dropMenus);
        dropMenus.forEach(dropMenu =>{
            const advSearch = dropMenu.querySelectorAll('.searchAdv')
            const advSearchValue = (event) => {
                const tagItems = dropMenu.querySelectorAll('.dropdown-item')
                resultInput = event.target.value;
                // console.log(resultInput)
                const arrAdv = Array.from(tagItems);
                // console.log(tagItems);  
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
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Gestionnaire Ajout Tags //
    tagClickInit = () => {
        // console.log("tagClickInit");
        this.filterBadgesWrapper = document.getElementById('filterBadgesWrapper');
        this.btnTags = document.querySelectorAll('.dropdown-item');
        // console.log(this.btnTags);
        this.btnTags.forEach(elt => {
            elt.addEventListener('mouseup', (e) => {
                this.itemName = e.target.innerHTML;
                const newBtn = document.createElement('span');
                if (e.target.classList.contains('ing')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-primary position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `;
                this.subjectRun(this.subject);
                console.log(this.itemName);
                }
                else if (e.target.classList.contains('app')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-success position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `;
                }
                else if (e.target.classList.contains('ust')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-danger position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `
                }
                // console.log(newBtn);
                this.tagCloseAdd(newBtn);
                e.target.remove();
                filterBadgesWrapper.appendChild(newBtn);
            })
        })
    }

    tagClickAdd = (newBtn) => {
        console.log("tagClickAdd");
        newBtn.addEventListener('click', (e) => {
                this.itemName = e.target.innerHTML;
                const newBtn = document.createElement('span');
                if (e.target.classList.contains('ing')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-primary position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `;
                this.subjectRun(this.subject);
                }
                else if (e.target.classList.contains('app')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-success position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `
                }
                else if (e.target.classList.contains('ust')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-danger position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `
                }
                this.tagCloseAdd(newBtn);
                
                filterBadgesWrapper.appendChild(newBtn);
                e.target.remove();
        })
    }

    tagCloseAdd = (btn) => {
        console.log("tagCloseAdd");
        btn.addEventListener('click', (e) => {
                this.itemName = e.target.parentNode.querySelector('span').innerHTML;
                this.itemName = this.itemName.trim();
                if (e.target.parentNode.classList.contains('btn-primary')) {
                    this.wrapper = document.querySelector('.ingChoices');
                    const btn = document.createElement('button');
                    btn.classList.add('dropdown-item', 'btn-primary', 'bg-primary', 'text-light', 'ing');
                    btn.innerHTML = this.itemName;
                    this.wrapper.appendChild(btn);
                    this.tagClickAdd(btn);
                    this.subjectRun(this.subject);
                }
                else if (e.target.parentNode.classList.contains('btn-success')) {
                    this.wrapper = document.querySelector('.appChoices')
                    const btn = document.createElement('button');
                    btn.classList.add('dropdown-item', 'btn-success', 'bg-success', 'text-light', 'app');
                    btn.innerHTML = this.itemName;
                    // console.log(itemName);
                    this.wrapper.appendChild(btn);
                    this.tagClickAdd(btn);
                }
                else if (e.target.parentNode.classList.contains('btn-danger')) {
                    this.wrapper = document.querySelector('.ustChoices');
                    const btn = document.createElement('button');
                    btn.classList.add('dropdown-item', 'btn-danger', 'bg-danger', 'text-light', 'ust');
                    btn.innerHTML = this.itemName;
                    // console.log(itemName);
                    this.wrapper.appendChild(btn);
                    this.tagClickAdd(btn);
                }
                
                e.target.parentNode.parentNode.remove();
        })       
    }
    subjectRun = (subject) => {
        const itemName = this.itemName;
        subject.run(
            {
                'type': 'ingredient_search',
                itemName
            })
    }
    
}
