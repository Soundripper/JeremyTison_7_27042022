class SearchForm {
    constructor (Recipes) {
        this._recipes = Recipes
        this.RecipesSearch = new RecipesSearch(Recipes)
        this.searchGeneral = document.createElement('div')
        this.searchGeneralWrapper = document.querySelector('.search_General_wrapper')
        this.recettesCardsWrapper = document.querySelector('.recettesCardsWrapper')
    }

    clearRecettesWrapper() {
        this.recettesCardsWrapper.innerHTML = ""
    }

    search(query) {
        let SearchedRecipes = null
        SearchedRecipes = this.RecipesSearch.search(query)

        // SearchedRecipes=this._recipes.filter(Recipes =>
        // Recipes.name.toLowerCase().includes(query.toLowerCase()))

        this.displayRecipes(SearchedRecipes)
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
                    this.search(query)
                } else if (query.length === 0) {
                    this.displayRecipes(recipes)
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