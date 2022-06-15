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
                this._mainSearch = action.value;
                console.log("Main search value :");
                console.log(this._mainSearch);
                this._defaultRecipes = recipes;
                this._defaultRecipes = this._defaultRecipes
                    .filter(recipe => {
                        return (recipe.ingredients.filter(item => item.ingredient.toLowerCase().includes(action.value.toLowerCase())).length > 0) ||
                        recipe.name.toLowerCase().includes(action.value.toLowerCase()) ||
                        recipe.description.toLowerCase().includes(action.value.toLowerCase())
                    })
                console.log(this._defaultRecipes);
                
                if (this._listIngredients.length > 0) {
                    console.log('ingredients sup 0 => recettes filtrées par la recherche principale =');
                    console.log(this._listIngredients);
                    this._listIngredients.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(recipe => {
                        return ((recipe.ingredients.filter(item => item.ingredient.includes(element))).length > 0)
                    })
                    })
                    console.log("Contient l'ingrédient :");
                    console.log(this._defaultRecipes);
                }
                if (this._listAppareils.length > 0) {
                    console.log('appareil sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listAppareils);
                    // this._defaultRecipes = recipes;
                    this._listAppareils.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(item => item.appliance.includes(element))
                    })
                    console.log("Contient l'appareil :");
                    console.log(this._defaultRecipes);
                }
                if (this._listUstensils.length > 0) {
                    console.log(this._listUstensils);
                    console.log('ustensils sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listUstensils);
                    // this._defaultRecipes = recipes;
                    this._listUstensils.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(item => item.ustensils.includes(element))
                    })
                }
                this._defaultRecipes.forEach(recipe => {
                    const Template = new TemplateCard(recipe);
                    this.recipesWrapper.appendChild(Template.createRecipeCard());
                })
                                
                this.advtemplate.renderFiltered(this._defaultRecipes);
                this.advFilter.tagClickInit(this._defaultRecipes);
                this.filterTheFilters();
                break;

            case 'ingredient_search':
                ////////////// si _listIngredients inclue le tag concerné
                console.log("case ingredient search");
                if (this._listIngredients.includes(action.itemName)){
                    console.log('includes itemName ingredient');
                    this._listIngredients = this._listIngredients.filter(item => item !== action.itemName)
                    console.log(this._listIngredients);
                }
                ////////////// si _listIngredients n'inclue pas le tag concerné
                else {
                    console.log('Does not include itemName ingredient');
                    this._listIngredients.push(action.itemName);
                    console.log(this._listIngredients);
                }
                ////////////////////////////////////////////////////////////////////////////////////////
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
                if (this._listAppareils.length > 0) {
                    console.log('appareil sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listAppareils);
                    // this._defaultRecipes = recipes;
                    this._listAppareils.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(item => item.appliance.includes(element))
                    })
                    
                    console.log("Contient l'appareil :");
                    console.log(this._defaultRecipes);
                }
                if (this._listUstensils.length > 0) {
                    console.log(this._listUstensils);
                    console.log('ustensils sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listUstensils);
                    // this._defaultRecipes = recipes;
                    this._listUstensils.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(item => item.ustensils.includes(element))
                    })
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
                this.advtemplate.renderFiltered(this._defaultRecipes);
                this.advFilter.tagClickInit(this._defaultRecipes);
                this.filterTheFilters();
                break;
                
            case 'appareil_search':
                console.log("case appareil search");
                ////////////// si _listAppareils inclue le tag concerné
                if (this._listAppareils.includes(action.itemName)){
                    console.log('includes itemName appareil');
                    this._listAppareils = this._listAppareils.filter(item => item !== action.itemName)
                    console.log(this._listAppareils);
                }
                ////////////// si _listAppareils n'inclue pas le tag concerné
                else {
                    console.log('Does not include itemName_appareil');
                    this._listAppareils.push(action.itemName);
                    console.log(this._listAppareils);
                }
                ////////////////////////////////////////////////////////////////////////////////////////
                if (this._listAppareils.length > 0) {
                    console.log('appareil sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listAppareils);
                    this._defaultRecipes = recipes;
                    this._listAppareils.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(item => item.appliance.includes(element))
                    })
                    
                    console.log("Contient l'appareil :");
                    console.log(this._defaultRecipes);
                }
                if (this._listAppareils.length < 1) {
                    console.log('appareils inf 1');
                    this._defaultRecipes = recipes;
                    console.log(this._defaultRecipes);
                    console.log(this._listAppareils);
                }

                if (this._listIngredients.length > 0) {
                    console.log('ingredients sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listIngredients);
                    // this._defaultRecipes = recipes;
                    this._listIngredients.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(recipe => {
                        return ((recipe.ingredients.filter(item => item.ingredient.includes(element))).length > 0)
                    })
                    })
                    
                    console.log("Contient l'ingrédient :");
                    console.log(this._defaultRecipes);
                }
                if (this._listUstensils.length > 0) {
                    console.log(this._listUstensils);
                    console.log('ustensils sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listUstensils);
                    // this._defaultRecipes = recipes;
                    this._listUstensils.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(item => item.ustensils.includes(element))
                    })
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
                this.advtemplate.renderFiltered(this._defaultRecipes);
                this.advFilter.tagClickInit(this._defaultRecipes);
                this.filterTheFilters();
                break;

                case 'ustensils_search':
                console.log("case ustensils search");
                ////////////// si _listAppareils inclue le tag concerné
                if (this._listUstensils.includes(action.itemName)){
                    console.log('includes itemName ustensils');
                    this._listUstensils = this._listUstensils.filter(item => item !== action.itemName)
                    console.log(this._listUstensils);
                }
                ////////////// si _listAppareils n'inclue pas le tag concerné
                else {
                    console.log('Does not include itemName_ustensils');
                    this._listUstensils.push(action.itemName);
                    console.log(this._listUstensils);
                }
                ////////////////////////////////////////////////////////////////////////////////////////
                if (this._listUstensils.length > 0) {
                    console.log(this._listUstensils);
                    console.log('ustensils sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listUstensils);
                    this._defaultRecipes = recipes;
                    this._listUstensils.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(item => item.ustensils.includes(element))
                    })
                    }
                    
                    console.log("Contient l'ustensile :");
                    console.log(this._defaultRecipes);
                
                if (this._listUstensils.length < 1) {
                    console.log('ustensils inf 1');
                    this._defaultRecipes = recipes;
                    console.log(this._defaultRecipes);
                    console.log(this._listUstensils);
                }

                if (this._listIngredients.length > 0) {
                    console.log('ingredients sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listIngredients);
                    // this._defaultRecipes = recipes;
                    this._listIngredients.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(recipe => {
                        return ((recipe.ingredients.filter(item => item.ingredient.includes(element))).length > 0)
                    })
                    })
                    
                    console.log("Contient l'ingrédient :");
                    console.log(this._defaultRecipes);
                }
                if (this._listAppareils.length > 0) {
                    console.log('appareil sup 0');
                    console.log(this._defaultRecipes);
                    console.log(this._listAppareils);
                    // this._defaultRecipes = recipes;
                    this._listAppareils.forEach(element => {
                        this._defaultRecipes = this._defaultRecipes.filter(item => item.appliance.includes(element))
                    })

                    console.log("Contient l'appareil :");
                    console.log(this._defaultRecipes);
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
                this.advtemplate.renderFiltered(this._defaultRecipes);
                this.advFilter.tagClickInit(this._defaultRecipes);
                this.filterTheFilters();
                break;
        }
        
    }
    
    filterTheFilters = () => {
        const tagItems = document.querySelectorAll('.dropdown-item')
        let arrAdvToFilter = Array.from(tagItems);
        arrAdvToFilter.forEach(elementsAdv => {
            this._listIngredients.forEach(element => {
                if(elementsAdv.innerHTML.toLowerCase().includes(element.toLowerCase())){
                    // elementsAdv.style.display = 'none';
                    elementsAdv.remove();
                }
            });
            this._listAppareils.forEach(element => {
                if(elementsAdv.innerHTML.toLowerCase().includes(element.toLowerCase())){
                    // elementsAdv.style.display = 'none';
                    elementsAdv.remove();
                }
            });
            this._listUstensils.forEach(element => {
                if(elementsAdv.innerHTML.toLowerCase().includes(element.toLowerCase())){
                    // elementsAdv.style.display = 'none';
                    elementsAdv.remove();
                }
            });
        });
    }
    
}
