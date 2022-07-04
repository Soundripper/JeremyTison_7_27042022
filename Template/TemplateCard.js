class TemplateCard {
    constructor (recipe) {
        this._recipe = recipe
        this.cardWrapper = document.createElement('div')
        this.cardWrapper.classList.add('card', 'mx-2', 'mb-5')
    }

    // get recipe() {
    //     return this._recipe
    // }

    createRecipeCard(){
        const imag = document.createElement('img');
        imag.classList.add('card-img-top');
        this.cardWrapper.append(imag);
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML += `
                <div class="d-flex justify-content-between">
                     <h6 class="card-title">${this._recipe.name}</h6>
                     <h6><i class="bi bi-clock"></i> <span class="ml-1">${this._recipe.time} min</span> </h6>
                </div>
        `
        this.cardWrapper.appendChild(cardBody);
        const ingRow = document.createElement('div');
        ingRow.classList.add('row', 'pt-2');
        cardBody.appendChild(ingRow);
        const ingWrapper = document.createElement('div');
        ingWrapper.classList.add('col-6', 'ingredientsW');
        ingRow.appendChild(ingWrapper);
        const recipeDescription = document.createElement('div');
        recipeDescription.classList.add('card-text', 'col-6', 'px-2', 't7', 'recipe-text');
        recipeDescription.innerHTML = `${this._recipe.description}`;
        ingRow.appendChild(recipeDescription);
        for (let i=0; i<this._recipe.ingredients.length; i++){
        const ing = document.createElement('div');
        ing.classList.add('t7', 'd-flex', 'justify-items-around');
        if (this._recipe.ingredients[i].unit == null){
            this._recipe.ingredients[i].unit = '';
        }
        ing.innerHTML += `
            <p class="card-text fw-bolder m-0 ingredient">${this._recipe.ingredients[i].ingredient}: &nbsp</p>
            <p class="card-text"> ${this._recipe.ingredients[i].quantity} ${this._recipe.ingredients[i].unit} </p>
        `;
        ingWrapper.appendChild(ing);
        }
        
        return this.cardWrapper;
    }
}
