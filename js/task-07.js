
const inputVal = document.querySelector('#font-size-control')
const span = document.querySelector('#text')


span.style.fontSize = `${inputVal.value}px`

inputVal.addEventListener('input', changeValue)

function changeValue(event) {
    span.style.fontSize = `${event.currentTarget.value}px`
    // console.dir(event.currentTarget.value)
}