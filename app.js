class App {
    constructor() {
        this.recipesWrapper = document.querySelector('.recettesCardsWrapper')
        this.recipesAll = []
        this.recipes = recipes;
        this.recipesFiltered = []
    }
    async recipesAllFunction() {
        const Recipes = this.recipes.map(recipe => new RecipeFactory(recipe));
        this.recipesAll = Recipes;
    }
    async main() {
        await this.recipesAllFunction();
        // console.log(this.recipesAll);

        const Search = new SearchForm(this.recipesAll)
        Search.render()

        const AdvFilters = new IngAppUst(this.RecipesAll)
        AdvFilters.render(this.RecipesAll)
        
        this.recipesAll.forEach(recipe => {
            const Template = new TemplateCard(recipe)
            this.recipesWrapper.appendChild(
                Template.createRecipeCard()
            )
        })
        
    }
    
}

const app = new App()
app.main()