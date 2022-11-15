const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
}
else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log('Error', error)
        }
    
        forecast(data.longitude, data.latitide, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            }
            console.log(data.location.place_name)
            console.log(forecastData)
        })
    })
}