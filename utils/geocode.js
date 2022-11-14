const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const geocode = (address, callback) => {
    const token = process.env.MAP_BOX_ACCESS_TOKEN
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitide: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0]
            })
        }
    })
}

module.exports = geocode