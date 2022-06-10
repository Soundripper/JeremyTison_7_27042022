class RecipesObserver {
    constructor(defaultRecipes) {
        this.recipesWrapper = document.querySelector('.recettesCardsWrapper');
        this.IngAppUstWrapper = document.getElementById('searchListsDropdowns');
        this._defaultRecipes = defaultRecipes;
        this.filteredRecipes = [];
        this._mainSearch = '';
        this._listIngredients = []
    }

    update = (action) => {
        this.recipesWrapper.innerHTML = "";
        switch (action.type) {
            case 'main_search':
                this._mainSearch = action.value;
                let filteredRecipes = this._defaultRecipes
                    .filter(recipe => {
                        return (recipe.ingredients.filter(item => item.ingredient.toLowerCase().includes(action.value.toLowerCase())).length > 0) ||
                        recipe.name.toLowerCase().includes(action.value.toLowerCase()) ||
                        recipe.description.toLowerCase().includes(action.value.toLowerCase())
                    })
                // console.log(filteredRecipes);
                if (this._listIngredients.length > 1) {
                    console.log('ingredients sup 0 => recettes filtrées par la recherche principale =');
                    console.log(filteredRecipes);
                    console.log(this._listIngredients);
                    this._listIngredients.forEach(element => {
                        filteredRecipes = filteredRecipes.filter(recipe => {
                        return ((recipe.ingredients.filter(item => item.ingredient.includes(element))).length > 0)
                    })
                    })
                    
                    console.log("Contient l'ingrédient :");
                    console.log(filteredRecipes);
                }
                filteredRecipes.forEach(recipe => {
                    const Template = new TemplateCard(recipe);
                    this.recipesWrapper.appendChild(Template.createRecipeCard());
                })
                // console.log(filteredRecipes);
                let Template_IngAppUst = new IngAppUst(filteredRecipes);
                Template_IngAppUst.renderFiltered(filteredRecipes);
                break;

            case 'ingredient_search':
                console.log("case ingredient search");
                if (this._listIngredients.includes(action.itemName)){
                    console.log('includes itemName');
                    this._listIngredients = this._listIngredients.filter(item => item !== action.itemName)
                    console.log(this._listIngredients);
                }
                else {
                    console.log('Does not include itemName');
                    this._listIngredients.push(action.itemName);
                    console.log(this._listIngredients);
                }
                if (this._listIngredients.length > 0) {
                    console.log('ingredients sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listIngredients);
                    this._defaultRecipes = recipes;
                    this._listIngredients.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(recipe => {
                        return ((recipe.ingredients.filter(item => item.ingredient.includes(element))).length > 0)
                    })
                    })
                    
                    console.log("Contient l'ingrédient :");
                    console.log(this._defaultRecipes);
                }
                if (this._listIngredients.length < 1) {
                    console.log('ingredients inf 1');
                    this._defaultRecipes = recipes;
                    console.log(this._defaultRecipes);
                    console.log(this._listIngredients);
                }
                if (this._mainSearch.length > 0) {
                    this._defaultRecipes = this._defaultRecipes.filter(recipe => {
                            return (recipe.ingredients.filter(item => item.ingredient.toLowerCase().includes(this._mainSearch.toLowerCase())).length > 0) ||
                            recipe.name.toLowerCase().includes(this._mainSearch.toLowerCase()) ||
                            recipe.description.toLowerCase().includes(this._mainSearch.toLowerCase())
                        })
                }
                this._defaultRecipes.forEach(recipe => {
                    const Template = new TemplateCard(recipe);
                    this.recipesWrapper.appendChild(Template.createRecipeCard());
                })
                
////////////////////////    
                // let Template_IngAppUst2 = new IngAppUst(this._defaultRecipes);
                // Template_IngAppUst2.renderFiltered(this._defaultRecipes);
////////////////////////

////////////////////////
                // let AdvFiltersVar = new AdvFilters(this._defaultRecipes);
                // AdvFiltersVar.tagClickInit(this._defaultRecipes);
/////////////////////////



                break;
            case 'ustensil_search':
                break;
        }
        
    }
}
