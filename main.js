
const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2019,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2010,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2014,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];
function age(birthYear){
   let calculatedAge = new Date().getFullYear() - birthYear ;
    if (calculatedAge == 1){
      return '1 year old'
    } else if (calculatedAge == 0) {
      return `Baby`
    } else {
      return `${calculatedAge} years old`
    }
}
function foods(foods){
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
    ${foods.map(function(food) {
      return `<li>${food}</li>`
    }).join('')}
  </ul>
  `
}

function petTemplate(pet){
  return `
  <div class="animal">
    <img class="pet-photo" src="${pet.photo}">
    <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
    <p> <strong>Age:</strong> ${age(pet.birthYear)}</p>
    ${pet.favFoods ? foods(pet.favFoods) : ''}

   </div>
  `
// trnary operation Ternary operation: that works life if else statement inside a template literal (${variable}), since template literal (${variable}) is not allowed to carry any if/else operation.
// syntax:${condition ? True : False } ${pet.favFoods ? foods() : ''}
// If the object pet.favFoods has value then it will evaluate as true and run the funftion foods(). If the object does not have any favFoods value then it will simply leave noting inside the ''.
}
document.getElementById('app').innerHTML = `
  <h1 class="app-title">Pets (${petsData.length} results)</h1>
  ${petsData.map(petTemplate).join('')}
  <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
`
