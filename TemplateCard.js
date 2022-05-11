class TemplateCard {
    constructor (recipe) {
        this._recipe = recipe
        this.cardWrapper = document.createElement('div')
    }

    // get recipe() {
    //     return this._recipe
    // }

    createRecipeCard(){
        const recipeCard = `
        <div class="card mx-2 mb-5" style="width: 440px;" >
        <img class="card-img-top" style="height: 250px; background-color: grey;" alt="">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h6 class="card-title">${this._recipe.name}</h6>
                <h6><i class="bi bi-clock"></i> <span class="ml-1">${this._recipe.time} min</span> </h6>
            </div>
            <div class="row pt-2">
                <div class="col-5" id="ingrédients">
                    <div class="t7 d-flex justify-items-around">
                        <p class="card-text fw-bolder m-0">Lait de coco: &nbsp</p>
                        <p class="card-text"> 400ml</p>
                    </div>
                    <div class="t7 d-flex justify-items-around">
                        <p class="card-text fw-bolder m-0">Jus de citron: &nbsp</p>
                        <p class="card-text"> 2</p>
                    </div>
                    <div class="t7 d-flex justify-items-around">
                        <p class="card-text fw-bolder m-0">Crème de coco: &nbsp</p>
                        <p class="card-text"> 2 c. à s.</p>
                    </div>
                    <div class="t7 d-flex justify-items-around">
                        <p class="card-text fw-bolder m-0">Sucre: &nbsp</p>
                        <p class="card-text"> 30g</p>
                    </div>
                    <div class="t7 d-flex justify-items-around">
                        <p class="card-text fw-bolder m-0">Glaçons</p>
                        <p class="card-text"></p>
                    </div>
                </div>
                <p class="card-text col-7 px-2 t7 recipe-text">${this._recipe.description}</p>
            </div>
        </div>
    </div>
        `
        this.cardWrapper.innerHTML = recipeCard
        return this.cardWrapper
    }
}