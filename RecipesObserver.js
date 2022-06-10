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
        // console.log(this.IngAppUstWrapper);
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
                    // let allFounded = arr2.every( ai => arr1.includes(ai) );    
                    // res = arr1.filter(item => !arr2.includes(item));
                filteredRecipes.forEach(recipe => {
                    const Template = new TemplateCard(recipe);
                    this.recipesWrapper.appendChild(Template.createRecipeCard());
                })
                // console.log(filteredRecipes);
                const Template_IngAppUst = new IngAppUst(filteredRecipes);
                Template_IngAppUst.renderFiltered(filteredRecipes);
                break;
            case 'ingredient_search':
                // this._listIngredients.push(action.value);
                // this._defaultRecipes
                //     .filter(recipe => {
                //         const ingredients = recipe._ingredients.filter(ingredient => ingredient._ingredient === action.value);
                //         let hasResult = false;
                //         if (ingredients.length > 0) {
                //             hasResult = true;
                //         }
                //         if (this._mainSearch.length > 0) {
                //             hasResult = recipe._name.toLowerCase().includes(action.value.toLowerCase()) || recipe._description.toLowerCase().includes(action.value.toLowerCase());
                //         }

                //         if (hasResult) {
                //             return recipe;
                //         }

                //         return false;
                //     })
                //     .forEach(recipe => {
                //         const Template = new RecipeCard(recipe);
                //         this.recipesWrapper.appendChild(Template.createCard());
                //     })
                break;
            case 'ustensil_search':
                break;
        }
        tagClickInit();
    }
}


// let searchedRecipes = this._recipes.filter(recipe => {
//             return (recipe.ingredients.filter(item => item.ingredient.toLowerCase().includes(query.toLowerCase())).length > 0) ||
//             recipe.name.toLowerCase().includes(query.toLowerCase()) ||
//             recipe.description.toLowerCase().includes(query.toLowerCase())
//         }