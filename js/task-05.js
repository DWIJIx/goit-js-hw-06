const nameinputEl = document.querySelector('#name-input');
const textSpanEl = document.querySelector('#name-output');

nameinputEl.addEventListener('input', onInputChange)


function onInputChange(event) {
    
    if (event.currentTarget.value !== '') {
        textSpanEl.textContent = event.currentTarget.value
    } else
        textSpanEl.textContent = 'Anonymous'
}