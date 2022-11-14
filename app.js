const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const key = process.env.ACCESS_KEY
const url = `http://api.weatherstack.com/current?access_key=${key}&query=37.8267,-122.42233&units=f`

request({ url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(response.body.current)
    const data = response.body.current
    console.log(`It is currently ${data.temperature} degrees out and ${data.weather_descriptions}. There is a ${data.precip}% chance of rain.`)
})