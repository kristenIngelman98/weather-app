const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const forecast = (latitude, longitude, callback) => {
    const key = process.env.WEATHER_STACK_ACCESS_KEY
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const {weather_descriptions, temperature, precip} = body.current
            callback(undefined, `${weather_descriptions[0]} throughout the day. It is currently ${temperature} degrees out. There is a ${precip}% chance of rain.`)
        }
    })
}

module.exports = forecast