const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const resSpan = document.querySelector('#value')


let counterValue = parseInt(resSpan.textContent)

decrementBtn.addEventListener('click', () => {
    counterValue += parseInt(decrementBtn.textContent);
    resSpan.textContent = counterValue
   })


incrementBtn.addEventListener('click', () => {
    counterValue += parseInt(incrementBtn.textContent);
    resSpan.textContent = counterValue
    })

