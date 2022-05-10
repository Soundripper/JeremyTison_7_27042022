const forLoop = () =>{
    let startDate = Date.now();
    let names = [];
    for (let i = 0; i < recipes.length; i++) {
        names.push(recipes[i].name);
    }
    console.log(names);
    let endDate = Date.now();
    console.log(startDate);
    console.log(endDate);
    console.log(endDate - startDate);
}

const forEachLoop = () =>{
    let startDate = Date.now();
    let ustensils = [];
    recipes.forEach(item => {
        ustensils.push(item.ustensils[0]);
    });
    ustensils = [...new Set(ustensils)];
    console.log(`Les ustensils: ${ustensils}`);
    let endDate = Date.now();
    console.log(startDate);
    console.log(endDate);
    console.log(endDate - startDate);
}

const filterLoop = () => {
    let startDate = Date.now();
    const recipesFiltered = recipes.filter(item => item.name.includes("Sal"));
    let endDate = Date.now();
    console.log(recipesFiltered);
    console.log(startDate);
    console.log(endDate);
    console.log(endDate - startDate);
}

const mapFunction = () => {
    let startDate = Date.now();
    let ingredients = recipes.map(item => item.ingredients[0].ingredient);
    let endDate = Date.now();
    ingredients = [...new Set(ingredients)];
    console.log(`Les ingrédients: ${ingredients}`);
    console.log(startDate);
    console.log(endDate);
    console.log(endDate - startDate);
}

forLoop();
forEachLoop();
filterLoop();
mapFunction();


