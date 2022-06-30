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
                    this._listIngredients = this._listIngredients.filter(item => item !== action.itemName)
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
                    this._listAppareils = this._listAppareils.filter(item => item !== action.itemName)
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
                    this._listUstensils = this._listUstensils.filter(item => item !== action.itemName)
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
        const tagItems = document.querySelectorAll('.dropdown-item')
        let arrAdvToFilter = Array.from(tagItems);
        arrAdvToFilter.forEach(elementsAdv => {
            this._listIngredients.forEach(element => {
                if(elementsAdv.innerHTML.toLowerCase().includes(element.toLowerCase())){
                    elementsAdv.remove();
                }
            });
            this._listAppareils.forEach(element => {
                if(elementsAdv.innerHTML.toLowerCase().includes(element.toLowerCase())){
                    elementsAdv.remove();
                }
            });
            this._listUstensils.forEach(element => {
                if(elementsAdv.innerHTML.toLowerCase().includes(element.toLowerCase())){
                    elementsAdv.remove();
                }
            });
        });
    }

    applyAll = (resultRecipes) => {
        resultRecipes.forEach(recipe => {
            const Template = new TemplateCard(recipe);
            this.recipesWrapper.appendChild(Template.createRecipeCard());
            })
        this.advtemplate.renderFiltered(this._defaultRecipes);
        this.advFilter.tagClickInit(this._defaultRecipes);
        this.filterTheFilters();
        endDate = Date.now();
        testTime();
    }

    filterCascade = () => {
        this._defaultRecipes = recipes;
        if (this._mainSearch.length > 0) {
            this._defaultRecipes = this._defaultRecipes.filter(recipe => {
                    return (recipe.ingredients.filter(item => item.ingredient.toLowerCase().includes(this._mainSearch.toLowerCase())).length > 0) ||
                    recipe.name.toLowerCase().includes(this._mainSearch.toLowerCase()) ||
                    recipe.description.toLowerCase().includes(this._mainSearch.toLowerCase())
                })
        }
        if (this._listIngredients.length > 0) {
            this._listIngredients.forEach(element => {
                this._defaultRecipes = this._defaultRecipes.filter(recipe => {
                return ((recipe.ingredients.filter(item => item.ingredient.includes(element))).length > 0)
                })
            })
        }
        if (this._listAppareils.length > 0) {
            this._listAppareils.forEach(element => {
                this._defaultRecipes = this._defaultRecipes.filter(item => item.appliance.includes(element))
            })
        }
        if (this._listUstensils.length > 0) {
            this._listUstensils.forEach(element => {
                this._defaultRecipes = this._defaultRecipes.filter(item => item.ustensils.includes(element))
            })
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
