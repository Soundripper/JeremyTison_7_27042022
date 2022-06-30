class RecipesObserver {
    constructor(defaultRecipes, advTemplate, advFilter, advFiltersSearchBar) {
        this.advtemplate = advTemplate;
        this.advFilter = advFilter;
        this.advFiltersSearchBar = advFiltersSearchBar;
        this.recipesWrapper = document.querySelector('.recettesCardsWrapper');
        this.IngAppUstWrapper = document.getElementById('searchListsDropdowns');
        this._defaultRecipes = defaultRecipes;
        this._mainSearch = '';
        this._listIngredients = [];
        this._listAppareils = [];
        this._listUstensils = [];
    }

    update = (action) => {
        this.recipesWrapper.innerHTML = "";
        switch (action.type) {
            case 'main_search':
                
                startDate = Date.now();

                this._mainSearch = action.value;
                this.filterCascade();
                this.applyAll(this._defaultRecipes);
                break;

            case 'ingredient_search':
                this._defaultRecipes = recipes;
                ////////////// si _listIngredients inclue le tag concerné
                if (this._listIngredients.includes(action.itemName)){
                    for (let i=0; i<this._listIngredients.length; i++){
                        if (this._listIngredients[i] === action.itemName){
                            this._listIngredients.splice(i,1);
                        }
                    }
                }
                ////////////// si _listIngredients n'inclue pas le tag concerné
                else {
                    this._listIngredients.push(action.itemName);
                }
                ////////////////////////////////////////////////////////////////////////////////////////
                this.filterCascade();                
                this.applyAll(this._defaultRecipes);
                break;
                
            case 'appareil_search':
                this._defaultRecipes = recipes;
                ////////////// si _listAppareils inclue le tag concerné
                if (this._listAppareils.includes(action.itemName)){
                    for (let i=0; i<this._listAppareils.length; i++){
                        if (this._listAppareils[i] === action.itemName){
                            this._listAppareils.splice(i,1);
                        }
                    }
                }
                ////////////// si _listAppareils n'inclue pas le tag concerné
                else {
                    this._listAppareils.push(action.itemName);
                }
                ////////////////////////////////////////////////////////////////////////////////////////
                this.filterCascade();                
                this.applyAll(this._defaultRecipes);
                break;

            case 'ustensils_search':
                this._defaultRecipes = recipes;
                ////////////// si _listAppareils inclue le tag concerné
                if (this._listUstensils.includes(action.itemName)){
                    for (let i=0; i<this._listUstensils.length; i++){
                        if (this._listUstensils[i] === action.itemName){
                            this._listUstensils.splice(i,1);
                        }
                    }
                }
                ////////////// si _listAppareils n'inclue pas le tag concerné
                else {
                    this._listUstensils.push(action.itemName);
                }
                ////////////////////////////////////////////////////////////////////////////////////////
                this.filterCascade();                
                this.applyAll(this._defaultRecipes);
                break;
        }
    }
    
    filterTheFilters = () => {
        const tagItems = document.querySelectorAll('.dropdown-item');
        let arrAdvToFilter = Array.from(tagItems);
        for(let i=0; i<arrAdvToFilter.length; i++){
            for (let j=0; j<this._listIngredients.length; j++){
                if(arrAdvToFilter[i].innerHTML.toLowerCase().includes(this._listIngredients[j].toLowerCase())){
                    arrAdvToFilter[i].remove();
                }   
            }
            for (let k=0; k<this._listAppareils.length; k++){
                if(arrAdvToFilter[i].innerHTML.toLowerCase().includes(this._listAppareils[k].toLowerCase())){
                    arrAdvToFilter[i].remove();
                }  
            }
            for (let l=0; l<this._listUstensils.length; l++){
                if(arrAdvToFilter[i].innerHTML.toLowerCase().includes(this._listUstensils[l].toLowerCase())){
                    arrAdvToFilter[i].remove();
                }  
            }
        }
    }

    applyAll = (resultRecipes) => {
        for (let i = 0; i < resultRecipes.length; i++) {
            const Template = new TemplateCard(resultRecipes[i]);
            this.recipesWrapper.appendChild(Template.createRecipeCard());
        }
        this.advtemplate.renderFiltered(this._defaultRecipes);
        this.advFilter.tagClickInit(this._defaultRecipes);
        this.filterTheFilters();
        endDate = Date.now();
        // testTime();
    }

    filterCascade = () => {
        this._defaultRecipes = recipes;
        this.filteredRecipes = [];
        if (this._mainSearch.length > 0) {
            for(let i=0; i<this._defaultRecipes.length; i++){
                for(let j=0; j<this._defaultRecipes[i].ingredients.length; j++){
                    if(
                    this._defaultRecipes[i].name.toLowerCase().includes(this._mainSearch.toLowerCase()) || 
                    this._defaultRecipes[i].description.toLowerCase().includes(this._mainSearch.toLowerCase()) ||
                    this._defaultRecipes[i].ingredients[j].ingredient.toLowerCase().includes(this._mainSearch.toLowerCase())){
                        // console.log("includes");
                        this.filteredRecipes.push(this._defaultRecipes[i]);
                        this.filteredRecipes = [...new Set(this.filteredRecipes)];
                    }
                }  
            }
            this._defaultRecipes = this.filteredRecipes;
        }

        if (this._listIngredients.length > 0) {
            this.filteredRecipes=[];
            for (let i=0; i<this._defaultRecipes.length; i++){
                let cptIngredients = 0;
                for (let j=0; j<this._listIngredients.length; j++){
                    for (let k=0; k<this._defaultRecipes[i].ingredients.length; k++){
                        if (this._defaultRecipes[i].ingredients[k].ingredient.includes(this._listIngredients[j])){
                            cptIngredients++;
                        }
                    }
                }
                if (cptIngredients === this._listIngredients.length){
                    this.filteredRecipes.push(this._defaultRecipes[i]);
                }
            }
            this.filteredRecipes = [...new Set(this.filteredRecipes)];
            this._defaultRecipes = this.filteredRecipes;
            console.log(this._defaultRecipes);
        }

  
        if (this._listAppareils.length > 0) {
            this.filteredRecipes=[];
            for (let j=0; j<this._defaultRecipes.length; j++){
                if (this._defaultRecipes[j].appliance.includes(this._listAppareils[0])){
                    // this._defaultRecipes = this._defaultRecipes.slice(j,1);
                    console.log(this._defaultRecipes[j]);
                    this.filteredRecipes.push(this._defaultRecipes[j]);
                }
            }
            this._defaultRecipes = this.filteredRecipes;
            console.log(this._defaultRecipes);
        }

        if (this._listUstensils.length > 0) {
            console.log("filtercascade");
            console.log(this._listUstensils);
            this.filteredRecipes=[];
            for (let i=0; i<this._defaultRecipes.length; i++){
                let cptUstensils = 0;
                for (let j=0; j<this._listUstensils.length; j++){
                    if (this._defaultRecipes[i].ustensils.includes(this._listUstensils[j])){
                        cptUstensils++;
                    }
                }
                if (cptUstensils === this._listUstensils.length){
                    this.filteredRecipes.push(this._defaultRecipes[i]);
                }
            }
            this.filteredRecipes = [...new Set(this.filteredRecipes)];
            this._defaultRecipes = this.filteredRecipes;
            console.log(this._defaultRecipes);
        }

        if (this._defaultRecipes.length === 0){
            console.log('Aucune recette ne correspond à la recherche');
            const recettesWrapper = document.querySelector('.recettesCardsWrapper');
            recettesWrapper.innerHTML = `
                <h6 class="noResultMessage">Aucune recette ne correspond à la recherche</h6>
            `
        }
    }
}
