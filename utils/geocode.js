const request = require('request')
const dotenv = require('dotenv')
dotenv.config()

const geocode = (address, callback) => {
    const token = process.env.MAP_BOX_ACCESS_TOKEN
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const data = body.features[0]
            callback(undefined, {
                latitide: data.center[0],
                longitude: data.center[1],
                location: data
            })
        }
    })
}

module.exports = geocode