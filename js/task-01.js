const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`)
console.log(' ');
categories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
    console.log(' ');
});