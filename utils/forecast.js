const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const forecast = (latitude, longitude, callback) => {
    const key = process.env.WEATHER_STACK_ACCESS_KEY
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${latitude},${longitude}`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = response.body.current
            callback(undefined, `${data.weather_descriptions[0]} throughout the day. It is currently ${data.temperature} degrees out. There is a ${data.precip}% chance of rain.`)
        }
    })
}

module.exports = forecast