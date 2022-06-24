class RecipesObserver {
    constructor(defaultRecipes, advTemplate, advFilter, advFiltersSearchBar) {
        this.advtemplate = advTemplate;
        this.advFilter = advFilter;
        this.advFiltersSearchBar = advFiltersSearchBar;
        this.recipesWrapper = document.querySelector('.recettesCardsWrapper');
        this.IngAppUstWrapper = document.getElementById('searchListsDropdowns');
        this._defaultRecipes = defaultRecipes;
        // this.filteredRecipes = [];
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
                    // this._listIngredients = this._listIngredients.filter(item => item !== action.itemName)
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
                    // this._listAppareils = this._listAppareils.filter(item => item !== action.itemName)
                    if (this._listAppareils.includes(action.itemName)){
                        for (let i=0; i<this._listAppareils.length; i++){
                            if (this._listAppareils[i] === action.itemName){
                                this._listAppareils.splice(i,1);
                            }
                        }
                        // this._listIngredients = this._listIngredients.filter(item => item !== action.itemName)
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
                    // this._listUstensils = this._listUstensils.filter(item => item !== action.itemName)
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
    
    // filterTheFilters = () => {
    //     const tagItems = document.querySelectorAll('.dropdown-item')
    //     let arrAdvToFilter = Array.from(tagItems);
    //     arrAdvToFilter.forEach(elementsAdv => {
    //         this._listIngredients.forEach(element => {
    //             if(elementsAdv.innerHTML.toLowerCase().includes(element.toLowerCase())){
    //                 elementsAdv.remove();
    //             }
    //         });      
    //         this._listAppareils.forEach(element => {
    //             if(elementsAdv.innerHTML.toLowerCase().includes(element.toLowerCase())){
    //                 elementsAdv.remove();
    //             }
    //         });
    //         this._listUstensils.forEach(element => {
    //             if(elementsAdv.innerHTML.toLowerCase().includes(element.toLowerCase())){
    //                 elementsAdv.remove();
    //             }
    //         });
    //     });
    // }

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

    // applyAll = (resultRecipes) => {
    //     // let startDate = Date.now();
    //     resultRecipes.forEach(recipe => {
    //         const Template = new TemplateCard(recipe);
    //         this.recipesWrapper.appendChild(Template.createRecipeCard());
    //         })
    //     // let endDate = Date.now();
    //     // console.log("applyAll Time = ");
    //     // console.log(endDate - startDate);
    //     this.advtemplate.renderFiltered(this._defaultRecipes);
    //     this.advFilter.tagClickInit(this._defaultRecipes);
    //     this.filterTheFilters();
    // }

    applyAll = (resultRecipes) => {
        for (let i = 0; i < resultRecipes.length; i++) {
            const Template = new TemplateCard(resultRecipes[i]);
            this.recipesWrapper.appendChild(Template.createRecipeCard());
        }
        this.advtemplate.renderFiltered(this._defaultRecipes);
        this.advFilter.tagClickInit(this._defaultRecipes);
        this.filterTheFilters();
        endDate = Date.now();
        testTime();
    }

    filterCascade = () => {
        this._defaultRecipes = recipes;
        this.filteredRecipes = [];
        // if (this._mainSearch.length > 0) {
        //     this._defaultRecipes = this._defaultRecipes.filter(recipe => {
        //         return (recipe.ingredients.filter(item => item.ingredient.toLowerCase().includes(this._mainSearch.toLowerCase())).length > 0) ||
        //         recipe.name.toLowerCase().includes(this._mainSearch.toLowerCase()) ||
        //         recipe.description.toLowerCase().includes(this._mainSearch.toLowerCase())
        //     })
        // }
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
            this._listIngredients.forEach(element => {
                this._defaultRecipes = this._defaultRecipes.filter(recipe => {
                return ((recipe.ingredients.filter(item => item.ingredient.includes(element))).length > 0)
                })
            })            
        }
  
        if (this._listAppareils.length > 0) {
            // this._listAppareils.forEach(element => {
            //     this._defaultRecipes = this._defaultRecipes.filter(item => item.appliance.includes(element))
            // })
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
            // this._listUstensils.forEach(element => {
            //     this._defaultRecipes = this._defaultRecipes.filter(item => item.ustensils.includes(element))
            // })
            this.filteredRecipes=[];
            for (let i=0; i<this._listUstensils.length; i++){
                for (let j=0; j<this._defaultRecipes.length; j++){
                        if (this._defaultRecipes[j].ustensils.includes(this._listUstensils[i])){
                            this.filteredRecipes.push(this._defaultRecipes[j]);
                            // this._defaultRecipes = this.filteredRecipes;
                        }
                    }
                
            }   
            this.filteredRecipes = [...new Set(this.filteredRecipes)];
            this._defaultRecipes = this.filteredRecipes;
            console.log(this._defaultRecipes);
        }

        if (this._defaultRecipes.length < 1){
            console.log('Aucune recette ne correspond à la recherche');
            const recettesWrapper = document.querySelector('.recettesCardsWrapper');
            recettesWrapper.innerHTML = `
                <h6 class="noResultMessage">Aucune recette ne correspond à la recherche</h6>
            `
        }
    }
}
