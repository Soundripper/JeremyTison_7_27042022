class App {
    constructor() {
        this.recipesWrapper = document.querySelector('.recettesCardsWrapper')
        this.recipesAll = []
    }
    async recipesAllFunction() {
        const Recipes = recipes.map(recipe => new RecipeFactory(recipe));
        this.recipesAll = Recipes;
        // let recipesAll = []
        // for (let i = 0; i < recipes.length; i++) {
        //     recipesAll.push(recipes[i]);
        // }
        // this.recipesAll = recipesAll;
    }
    async main() {
        await this.recipesAllFunction();
        // console.log(this.recipesAll);

        const Search = new SearchForm(this.recipesAll)
        Search.render()

        const AdvFilters = new IngAppUst(this.RecipesAll)
        AdvFilters.render()
        
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