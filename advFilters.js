class AdvFilters{
    constructor(subject){
        this.subject = subject;
        this.filterBadgesWrapper = null;
        this.btnTags = null;
        this.itemName = null;
        this.resultInput = null;
    }
    ///////////////////////////////////////////////////////////////////////////////
    // Gestionnaire Input advanced FILTER//
    advFiltersSearchBar = () => {
        console.log("advFiltersSearchBar");
        const dropMenus = document.querySelectorAll('.dropCollapse');
        // console.log(dropMenus);
        dropMenus.forEach(dropMenu =>{
            const advSearch = dropMenu.querySelectorAll('.searchAdv')
            const advSearchValue = (event) => {
                const tagItems = dropMenu.querySelectorAll('.dropdown-item')
                this.resultInput = event.target.value;
                // console.log(resultInput)
                let arrAdv = Array.from(tagItems);
                // console.log(tagItems); 
                arrAdv.forEach(elementsAdv => {
                    if(elementsAdv.innerHTML.toLowerCase().includes(this.resultInput.toLowerCase())){
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

        let ingSearch = document.getElementById('ingSearch');
        ingSearch.value = "";
        let appSearch = document.getElementById('appSearch');
        appSearch.value = "";
        let ustSearch = document.getElementById('ustSearch');
        ustSearch.value = "";

        // console.log(this.btnTags);
        this.btnTags.forEach(elt => {
            elt.addEventListener('click', (e) => {
                this.itemName = e.target.innerHTML;
                const newBtn = document.createElement('span');
                if (e.target.classList.contains('ing')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-primary position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `;
                this.subjectRunIng(this.subject);
                }
                else if (e.target.classList.contains('app')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-success position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `;
                this.subjectRunApp(this.subject);
                }
                else if (e.target.classList.contains('ust')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-danger position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `;
                this.subjectRunUst(this.subject);
                }
                // console.log(newBtn);
                this.tagCloseAdd(newBtn);
                // e.target.remove();
                filterBadgesWrapper.appendChild(newBtn);
            })
        })
    }

    tagClickAdd = (newBtn) => {
        console.log("tagClickAdd");

        let ingSearch = document.getElementById('ingSearch');
        ingSearch.value = "";
        let appSearch = document.getElementById('appSearch');
        appSearch.value = "";
        let ustSearch = document.getElementById('ustSearch');
        ustSearch.value = "";
        
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
                this.subjectRunIng(this.subject);
                }
                else if (e.target.classList.contains('app')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-success position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `;
                this.subjectRunApp(this.subject);
                }
                else if (e.target.classList.contains('ust')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-danger position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle"></i>
                    </button>
                `;
                this.subjectRunUst(this.subject);
                }
                this.tagCloseAdd(newBtn);
                
                filterBadgesWrapper.appendChild(newBtn);
                
                // e.target.remove();
        })
    }

    tagCloseAdd = (btn) => {
        console.log("tagCloseAdd");
        btn.addEventListener('click', (e) => {

            let ingSearch = document.getElementById('ingSearch');
            ingSearch.value = "";
            let appSearch = document.getElementById('appSearch');
            appSearch.value = "";
            let ustSearch = document.getElementById('ustSearch');
            ustSearch.value = "";

            this.itemName = e.target.parentNode.querySelector('span').innerHTML;
            this.itemName = this.itemName.trim();

            if (e.target.parentNode.classList.contains('btn-primary')) {
                this.wrapper = document.querySelector('.ingChoices');
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-primary', 'bg-primary', 'text-light', 'ing');
                btn.innerHTML = this.itemName;
                this.wrapper.appendChild(btn);
                this.tagClickAdd(btn);
                this.subjectRunIng(this.subject);
                e.target.parentNode.parentNode.remove();
            }
            else if (e.target.parentNode.classList.contains('btn-success')) {
                this.wrapper = document.querySelector('.appChoices')
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-success', 'bg-success', 'text-light', 'app');
                btn.innerHTML = this.itemName;
                // console.log(itemName);
                this.wrapper.appendChild(btn);
                this.tagClickAdd(btn);
                this.subjectRunApp(this.subject);
                e.target.parentNode.parentNode.remove();
            }
            else if (e.target.parentNode.classList.contains('btn-danger')) {
                this.wrapper = document.querySelector('.ustChoices');
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-danger', 'bg-danger', 'text-light', 'ust');
                btn.innerHTML = this.itemName;
                // console.log(itemName);
                this.wrapper.appendChild(btn);
                this.tagClickAdd(btn);
                this.subjectRunUst(this.subject);
                e.target.parentNode.parentNode.remove();
            }
            
            // console.log(e.target.parentNode.parentNode);
            // e.target.parentNode.parentNode.remove();
        })    
    }

    subjectRunIng = (subject) => {
        const itemName = this.itemName;
        subject.run(
            {
                'type': 'ingredient_search',
                itemName
            })
    }
    subjectRunApp = (subject) => {
        const itemName = this.itemName;
        subject.run(
            {
                'type': 'appareil_search',
                itemName
            })
    }
    subjectRunUst = (subject) => {
        const itemName = this.itemName;
        subject.run(
            {
                'type': 'ustensils_search',
                itemName
            })
    }
}

