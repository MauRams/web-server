const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const forecastMsg = document.querySelector('#forecast')
const locationMsg = document.querySelector('#location')

forecastMsg.textContent = ''
locationMsg.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    //prevent the browser refresh
    e.preventDefault()

    const location = searchElement.value

    forecastMsg.textContent = ('...loading')
    locationMsg.textContent = ('')

    fetch('/weather?address=' + location).then((response) => {
        
        response.json().then((data) => {
            if (data.error) {
                forecastMsg.textContent = data.error

            } else {
                forecastMsg.textContent = data.forecast
                locationMsg.textContent = data.location
            }
        })
    })
    
    
})