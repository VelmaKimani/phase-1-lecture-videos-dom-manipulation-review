//DOM Render Functions
function renderOneRecipe(recipe){
    //Build Recipe
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src="${recipe.image}">
    <div clsss = "content"></div>
        <h4>${recipe.title}</h4>
        <p>
          $<span class ="id">${recipe.id}</span> ID
        </p>
        <p>${recipe.imageType}</p>
    </div>
    <div class = "buttons"> 
        <button> Cook Recipe </button>
        <button> Finished Cooking </button>
    </div>
    `
    //console.log(card)
    //Add recipe card to DOM
    document.querySelector('#recipe-list').appendChild(card)
}

//Fetch requests
//Get Fetch for all animal resources
function getAllRecipes(){
    fetch('http://localhost:3000/recipes')
    .then(res => res.json())
    .then(recipesData => recipesData.forEach(recipe => renderOneRecipe(recipe) 
    ))
    console.log('before fetch returns')
}

//Initial Render
//Get Data and Render our animals to the DOM
function initialize(){
    getAllRecipes()
    console.log('after get all recipes')
    //recipes.forEach(recipe => renderOneRecipe(recipe)); //used while the data.js file was being used.
}
initialize()

//console.log('hi from index.js')
//console.log(recipes)
