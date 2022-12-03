const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const list = document.querySelector('.gallery');


// створили типу 1 картинку
const imgMarkup = img => {
  return `
      <li>
        <img src="${img.url}" alt="${img.alt}">
      </li>
      `
}

// console.log(imgMarkup(images[0]))


// Мапаєм масив обєктів за допомогою колбек ф-ї imgMarkup (вертає масив) + join розбиважмо масив в рядок
const imgMarkupLi = images.map(imgMarkup).join('')

// console.log(imgMarkupLi)

const imgUlEl = document.querySelector('.gallery')

imgUlEl.insertAdjacentHTML('afterbegin', imgMarkupLi)

