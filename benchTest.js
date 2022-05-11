const forLoop = () =>{
    let recipesAll = [];
    for (let i = 0; i < recipes.length; i++) {
        recipesAll.push(recipes[i]);
    }
    console.log(recipesAll);
}

const forEachLoop = () =>{
    let startDate = Date.now();
    let ustensils = [];
    recipes.forEach(item => {
        ustensils.push(item.ustensils[0]);
    });
    ustensils = [...new Set(ustensils)];
    console.log(`Les ustensiles : ${ustensils}`);
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
    console.log(`Les ingrédients : ${ingredients}`);
    console.log(startDate);
    console.log(endDate);
    console.log(endDate - startDate);
}

// forLoop();
// forEachLoop();
// filterLoop();
// mapFunction();


