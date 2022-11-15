const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
}
else {
    geocode(address, (error, { longitude, latitide, location }) => {
        if (error) {
            return console.log('Error', error)
        }
    
        forecast(longitude, latitide, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            }
            console.log(location.place_name)
            console.log(forecastData)
        })
    })
}