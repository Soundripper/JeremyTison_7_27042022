class RecipeObj {
    constructor(data) {
        this._id = data.id
        this._name = data.name
        this._ingredients = data.ingredients.ingredient
        this._quantity = data.ingredients.quantity
        this._unit = data.ingredients.unit
        this._time = data.time
        this._description = data.description
        this._appliance = data.appliance
        this._ustensils = data.ustensils
    }

    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get ingredients() {
        return this._ingredients
    }
    get quantity() {
        return this._quantity
    }
    get unit() {
        return this._unit
    }
    get time() {
        return this._time
    }
    get description() {
        return this._description
    }
    get appliance() {
        return this._appliance
    }
    get ustensils() {
        return this._ustensils
    }

}