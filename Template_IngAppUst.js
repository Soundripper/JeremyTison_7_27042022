class IngAppUst{
    constructor(data){
        this._data = data
        this._IngAppUstWrapper = document.getElementById('searchListsDropdowns')
        this._dropIngBtnDiv = document.createElement('div')
        this._dropIng = document.createElement('div')
        this._dropAppBtnDiv = document.createElement('div')
        this._dropApp = document.createElement('div')
        this._dropUstBtnDiv = document.createElement('div')
        this._dropUst = document.createElement('div')
    }

    render(){
        this._IngAppUstWrapper.innerHTML = ''
        this._dropIngBtnDiv.innerHTML = ''
        this._dropIng.innerHTML = ''
        this._dropAppBtnDiv.innerHTML = ''
        this._dropApp.innerHTML = ''
        this._dropUstBtnDiv.innerHTML = ''
        this._dropUst.innerHTML = ''
        
        this._dropIngBtnDiv.classList.add('dropdown', 'mr-3', 'dropIngBtnDiv')
        this._dropIngBtnDiv.innerHTML = `
            <button type="button" class="btn btn-primary dropdown-toggle mb-2 show" 
            id="dropIngBtn" type="button" data-toggle="collapse" 
                data-target="#dropIng, #dropIngBtn" aria-haspopup="true" aria-expanded="false">
                Ingrédients
            </button>
        `
        this._IngAppUstWrapper.appendChild(this._dropIngBtnDiv);

        this._dropIng.classList.add('collapse', 'bg-primary', 'mr-3', 'mb-2', 'rounded', 'dropCollapse')
        this._dropIng.setAttribute('id', 'dropIng')
        this._dropIng.innerHTML = `
            <div class="dropdown-container bg-primary rounded">
                <div class="form">
                    <input type="search" id="ingSearch" class="form-control border-0 bg-primary 
                    text-light searchAdv" placeholder="Rechercher un ingrédient" aria-label="Search" />
                </div>
                <div class="choices ingChoices">
                </div>
            </div>
        `
        this._IngAppUstWrapper.appendChild(this._dropIng);


        this._dropAppBtnDiv.classList.add('dropdown', 'mr-3', 'dropAppBtnDiv')
        this._dropAppBtnDiv.innerHTML = `
            <button type="button" class="btn btn-success dropdown-toggle mb-2 show" 
            id="dropAppBtn" type="button" data-toggle="collapse" 
                data-target="#dropApp, #dropAppBtn" aria-haspopup="true" aria-expanded="false">
                Appareils
            </button>
        `
        this._IngAppUstWrapper.appendChild(this._dropAppBtnDiv);

        this._dropApp.classList.add('collapse', 'bg-success', 'mr-3', 'mb-2', 'rounded', 'dropCollapse')
        this._dropApp.setAttribute('id', 'dropApp')
        this._dropApp.innerHTML = `
            <div class="dropdown-container bg-success rounded">
                <div class="form">
                    <input type="search" id="ingSearch" class="form-control border-0 bg-success 
                    text-light searchAdv" placeholder="Rechercher un appareil" aria-label="Search" />
                </div>
                <div class="choices appChoices">
                </div>
            </div>
        `
        this._IngAppUstWrapper.appendChild(this._dropApp);

        this._dropUstBtnDiv.classList.add('dropdown', 'mr-3', 'dropAppBtnDiv')
        this._dropUstBtnDiv.innerHTML = `
            <button type="button" class="btn btn-danger dropdown-toggle mb-2 show" 
            id="dropUstBtn" type="button" data-toggle="collapse" 
                data-target="#dropUst, #dropUstBtn" aria-haspopup="true" aria-expanded="false">
                Ustensiles
            </button>
        `
        this._IngAppUstWrapper.appendChild(this._dropUstBtnDiv);

        this._dropUst.classList.add('collapse', 'bg-danger', 'mr-3', 'mb-2', 'rounded', 'dropCollapse')
        this._dropUst.setAttribute('id', 'dropUst')
        this._dropUst.innerHTML = `
            <div class="dropdown-container bg-danger rounded">
                <div class="form">
                    <input type="search" id="ingSearch" class="form-control border-0 bg-danger 
                    text-light searchAdv" placeholder="Rechercher un ustensile" aria-label="Search" />
                </div>
                <div class="choices ustChoices">
                </div>
            </div>
        `
        this._IngAppUstWrapper.appendChild(this._dropUst);

        let ingredients = recipes.map(item => item.ingredients[0].ingredient);
        ingredients = [...new Set(ingredients)];
        const ingChoices = document.querySelector('.ingChoices');
        ingChoices.innerHTML =''
        ingredients.forEach(elt => {
            const btn = document.createElement('button');
            btn.classList.add('dropdown-item', 'btn-primary', 'bg-primary', 'text-light', 'ing');
            btn.innerHTML = `${elt}`;
            
            ingChoices.appendChild(btn);
        })

        let appareils = recipes.map(item => item.appliance);
        appareils = [...new Set(appareils)];
        const appChoices = document.querySelector('.appChoices');
        appChoices.innerHTML =''
        appareils.forEach(elt => {
            const btn = document.createElement('button');
            btn.classList.add('dropdown-item', 'btn-success', 'bg-success', 'text-light', 'app');
            btn.innerHTML = `${elt}`;
            
            appChoices.appendChild(btn);
        })

        let ustensils = recipes.map(item => item.ustensils);
        let ustensilsFlat = "".split.call(ustensils, ",");
        ustensilsFlat = [...new Set(ustensilsFlat)];
        // console.log(ustensilsFlat);
        const ustChoices = document.querySelector('.ustChoices');
        ustChoices.innerHTML =''
        ustensilsFlat.forEach(elt => {
            const btn = document.createElement('button');
            btn.classList.add('dropdown-item', 'btn-danger', 'bg-danger', 'text-light', 'ust');
            btn.innerHTML = `${elt}`;
            
            ustChoices.appendChild(btn);
        })

    }

    renderFiltered(data){
        let ingredients = data.map(item => item.ingredients[0].ingredient);
        ingredients = [...new Set(ingredients)];
        const ingChoices = document.querySelector('.ingChoices');
        ingChoices.innerHTML =''
        ingredients.forEach(elt => {
            const btn = document.createElement('button');
            btn.classList.add('dropdown-item', 'btn-primary', 'bg-primary', 'text-light', 'ing');
            btn.innerHTML = `${elt}`;
            
            ingChoices.appendChild(btn);
        })

        let appareils = data.map(item => item.appliance);
        appareils = [...new Set(appareils)];
        const appChoices = document.querySelector('.appChoices');
        appChoices.innerHTML =''
        appareils.forEach(elt => {
            const btn = document.createElement('button');
            btn.classList.add('dropdown-item', 'btn-success', 'bg-success', 'text-light', 'app');
            btn.innerHTML = `${elt}`;
            
            appChoices.appendChild(btn);
        })

        let ustensils = data.map(item => item.ustensils);
        let ustensilsFlat = "".split.call(ustensils, ",");
        ustensilsFlat = [...new Set(ustensilsFlat)];
        // console.log(ustensilsFlat);
        const ustChoices = document.querySelector('.ustChoices');
        ustChoices.innerHTML =''
        ustensilsFlat.forEach(elt => {
            const btn = document.createElement('button');
            btn.classList.add('dropdown-item', 'btn-danger', 'bg-danger', 'text-light', 'ust');
            btn.innerHTML = `${elt}`;
            
            ustChoices.appendChild(btn);
        })

    }

}
