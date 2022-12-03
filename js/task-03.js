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

// створили функцію, яка повертає рядок з 1 картинки
const imgMarkup = img => 
      `
      <li>
        <img src="${img.url}" alt="${img.alt}">
      </li>
      `

// Мапаєм масив обєктів за допомогою колбек ф-ї imgMarkup (вертає масив рядків) + join розбиважмо масив рядків в 
// загальний рядок.Записуємо в змінну imagesMarkup

const imagesMarkup = images.map(imgMarkup).join('');

// Створюємо посилання на ul
const ulContiner = document.querySelector('.gallery')
// Вставляємо суцільний рядок imagesMarkup в ulContiner на місце afterbegin
ulContiner.insertAdjacentHTML('afterbegin', imagesMarkup)




