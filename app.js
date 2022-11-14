const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const key = process.env.ACCESS_KEY
const url = `http://api.weatherstack.com/current?access_key=${key}&query=37.8267,-122.42233`

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})