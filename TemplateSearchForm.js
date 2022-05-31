class SearchForm {
    constructor (Recipes) {
        this._recipes = Recipes
        //this.RecipesSearch = new RecipesSearch(Recipes)
        this.searchGeneral = document.createElement('div')
        this.searchGeneralWrapper = document.querySelector('.search_General_wrapper')
        this.recettesCardsWrapper = document.querySelector('.recettesCardsWrapper')
    }

    clearRecettesWrapper() {
        this.recettesCardsWrapper.innerHTML = ""
    }

    search(query) {
        // SearchedRecipes = this.RecipesSearch.search(query)

        let searchedRecipes = this._recipes.filter(recipe => {
            return (recipe.ingredients.filter(item => item.ingredient.toLowerCase().includes(query.toLowerCase())).length > 0) ||
            recipe.name.toLowerCase().includes(query.toLowerCase()) ||
            recipe.description.toLowerCase().includes(query.toLowerCase())
        }
        
        )
        // console.log(searchedRecipes)
        const AdvFilters = new IngAppUst()
        AdvFilters.renderFiltered(searchedRecipes)
        
        this.displayRecipes(searchedRecipes)
        tagClickListen();
    }


    displayRecipes(Recipes) {
        this.clearRecettesWrapper()
        Recipes.forEach(Recipes => {
            const Template = new TemplateCard(Recipes)
            this.recettesCardsWrapper.appendChild(Template.createRecipeCard())
        })
        
    }

    inputSearch() {
        this.searchGeneralWrapper
            .querySelector('.search_General')
            .addEventListener('input', e => {
                const query = e.target.value

                if (query.length >= 3) {
                    this.search(query);
                } else  {
                    this.displayRecipes(this._recipes);
                    const AdvFilters = new IngAppUst();
                    AdvFilters.renderFiltered(this._recipes);
                    tagClickListen();
                }
            })
    }
    render() {
        const searchForm = `
        <div class="input-group rounded col-12 mx-auto mt-3" id="searchBar">
            <input type="search" class="form-control rounded bg-light search_General " placeholder="Rechercher une recette" aria-label="Search" aria-describedby="search-addon" />
            <span class="searchIcon border-0" id="search-addon">
                <i class="bi bi-search" ></i>
            </span>
        </div>
        `

        this.searchGeneral.innerHTML = searchForm
        this.searchGeneralWrapper.appendChild(this.searchGeneral)
        this.inputSearch()
    }
}