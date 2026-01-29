let recipes =[];

function fetchData(){
    fetch("https://dummyjson.com/recipes").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.recipes);
        recipe =val.recipes;
        localStorage.setItem("allrecipes",JSON.stringify(recipe))
        displayRecipe(recipe);
    })
}

function displayRecipe(rec){
    let output = "";
    rec.map((v)=>{
        output +=`
        <main>
            <div id="image">
                <image src="${v.image}"/>
            </div>
            <h2>${v.name}</h2>
            <div id="container">
            <p id="p1">Cuisine: ${v.cuisine}</p>
            <p id="p2">Rating: ${v.rating}</p>
            <p id="p3">Meal Type: ${v.mealType}</p>
            <p id="p4">Servings: ${v.servings}</p>
            </div>
        </main>
        `
    })
    document.getElementById("recipeContainer").innerHTML = output;
}
fetchData()

document.getElementById("searchbar").addEventListener("input", function searchItem(event){
    let searchTerm = event.target.value.toLowerCase();
    let filteredRecipe = recipe.filter((v)=>{
        return (v.name.toLowerCase().includes(searchTerm) || 
                v.cuisine.toLowerCase().includes(searchTerm));
    })
    displayRecipe(filteredRecipe);
})
