const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(42.3601, 71.0589, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })