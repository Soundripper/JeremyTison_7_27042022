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

        this.recipesSubject = new RecipesSubject();
        this.recipesResult = new RecipesObserver(this.recipesAll);
        this.recipesSubject.subscribe(this.recipesResult);

        const Search = new SearchForm(this.recipesSubject)
        Search.render()

        const AdvFiltersTemplate = new IngAppUst(this.recipesSubject)
        AdvFiltersTemplate.render(this.recipesAll)

        let AdvFiltersI = new AdvFilters(this.recipesSubject)
        AdvFiltersI.tagClickInit(this.recipesSubject)
        
        this.recipesAll.forEach(recipe => {
        const Template = new TemplateCard(recipe)
        this.recipesWrapper.appendChild(Template.createRecipeCard())
        })
    }
}

const app = new App()
app.main()