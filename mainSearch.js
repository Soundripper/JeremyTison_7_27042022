class Search {
    constructor(Recipes) {
        this.Recipes = Recipes
    }

    search(query) {
        return this.filterRecipes(query)
    }
}


class RecipesSearch extends Search {
    constructor(Recipes) {
        super(Recipes)
    }

    filterRecipes(query) {
        return this.Recipes.filter(Recipes =>
            Recipes.name.toLowerCase().includes(query.toLowerCase())
        )
    }
}