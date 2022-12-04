const input = document.querySelector('input')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxEl = document.querySelector('#boxes')

createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  amount = input.value
  boxEl.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.marginTop = '15px'
    box.style.backgroundColor = `${getRandomHexColor()}`
    boxEl.append(box)
  }
}

function destroyBoxes() {
  boxEl.innerHTML = '';
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}