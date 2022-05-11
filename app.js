class App {
    constructor() {
        this.recipesWrapper = document.querySelector('.recettesCardsWrapper')
        this.recipesAll = []
    }
    async recipesAllFunction() {
        let recipesAll = []
        for (let i = 0; i < recipes.length; i++) {
            recipesAll.push(recipes[i]);
        }
        // console.log(recipesAll);
        this.recipesAll = recipesAll;
        
    }
    async main() {
        await this.recipesAllFunction()
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