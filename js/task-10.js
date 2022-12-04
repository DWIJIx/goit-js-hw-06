

const input = document.querySelector('input')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxEl = document.querySelector('#boxes')

// input.addEventListener('change', enterInputValue)
createBtn.addEventListener('click', onCreateBtnClick)
destroyBtn.addEventListener('click', onDestroyBtnClick)


// function enterInputValue(event) {
//   // console.log(event.currentTarget.value)
//   return event.currentTarget.value
// }

function onCreateBtnClick(event) {
  boxEl.innerHTML = '';

  for (let i = 0; i < input.value; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.marginTop = '10px'
    box.style.backgroundColor = `${getRandomHexColor()}`

    boxEl.append(box)
  }
}

function onDestroyBtnClick(event) {
  boxEl.innerHTML = '';
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


