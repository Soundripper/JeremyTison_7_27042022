class RecipesSubject {
    constructor() {
        this.observers = [];
    }

    subscribe = (observer) => {
        this.observers.push(observer);
    }

    run = (action) => {
        for(let i=0; i<this.observers.length; i++){
            this.observers[i].update(action)
        }
    }
}