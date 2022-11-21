const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// let listOfIngredientsContainer  = document.querySelector('ul#ingredients');

// for (let i = 0; i < ingredients.length; i += 1) {
//   let aNewListItem = document.createElement('li');
//   aNewListItem.textContent = ingredients[i];
//   aNewListItem.classList.add('item');
//   listOfIngredientsContainer.append(aNewListItem)
// }
// console.log(listOfIngredientsContainer )



// let listOfIngredientsContainer = document.querySelector('ul#ingredients');
// let listOfIngredients = []
// for (let i = 0; i < ingredients.length; i += 1) {
//   const aNewListItem = document.createElement('li');
//   aNewListItem.textContent = ingredients[i];
//   aNewListItem.classList.add('item')
//   listOfIngredients.push(aNewListItem);
//   // console.log(aNewListItem)
// }
// console.log(listOfIngredients)

// listOfIngredientsContainer.append(...listOfIngredients)


let listOfIngredientsContainer = document.querySelector('ul#ingredients');

const elements = ingredients.map(option => {
  const aNewListItem = document.createElement('li');
  aNewListItem.textContent = option;
  aNewListItem.classList.add('item')
  return aNewListItem
})
console.log(elements)
listOfIngredientsContainer.append(...elements)
