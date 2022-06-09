class RecipesSubject {
    constructor() {
        this.observers = [];
    }

    subscribe = (observer) => {
        this.observers.push(observer);
        // console.log(this.observers);
    }

    run = (action) => {
        this.observers.forEach(observer => observer.update(action));
    }
}