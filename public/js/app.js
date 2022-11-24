// client side js
console.log('client side js file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.getElementById('message-1')
const message2 = document.getElementById('message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // prevents default behavior E.g. reloading the page
    
    const location = search.value

    console.log(location)

    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            // console.log(data.error)
            message1.textContent = data.error
            message2.textContent = ''
        } else {
            message1.textContent = data.location
            message2.textContent = data.forecast
            // console.log(data.location)
            // console.log(data.forecast)
        }
    })
})
})