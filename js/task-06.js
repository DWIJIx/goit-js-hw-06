const input = document.querySelector('#validation-input')

input.addEventListener('blur', checkInputLength)


function checkInputLength(event) {

    if (event.currentTarget.value.length < event.currentTarget.dataset.length) {
        input.classList.add('invalid')
        input.classList.remove('valid')
    } else {
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
} 