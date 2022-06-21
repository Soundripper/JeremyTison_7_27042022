class App {
    constructor() {
        this.recipesWrapper = document.querySelector('.recettesCardsWrapper')
        this.recipesAll = []
        this.recipes = recipes;
        // this.recipesFiltered = []
    }
    async recipesAllFunction() {
        const Recipes = this.recipes.map(recipe => new RecipeFactory(recipe));
        this.recipesAll = Recipes;
    }
    async main() {
        await this.recipesAllFunction();

        this.recipesSubject = new RecipesSubject();
        const AdvFiltersTemplate = new IngAppUst(this.recipesSubject);
        let AdvFiltersI = new AdvFilters(this.recipesSubject);
        this.recipesResult = new RecipesObserver(this.recipesAll, AdvFiltersTemplate, AdvFiltersI);
        this.recipesSubject.subscribe(this.recipesResult);

        const Search = new SearchForm(this.recipesSubject);
        Search.render()

        AdvFiltersTemplate.render(this.recipesAll);
        
        AdvFiltersI.tagClickInit(this.recipesSubject);
        AdvFiltersI.advFiltersSearchBar();
        
        this.recipesAll.forEach(recipe => {
        const Template = new TemplateCard(recipe)
        this.recipesWrapper.appendChild(Template.createRecipeCard())
        })
    }
}

const app = new App()
app.main()