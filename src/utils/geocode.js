const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoieXV0b2xpaG8iLCJhIjoiY2s2anM2ZjBnMDB0cDNlcWpuNmNxZ25vcCJ9.k4lATd1i2FrqSSGd7IOwMw'
    request({url: url, json: true}, (error, {body})=> {
        if(error) {
            callback('unable to connect to location service', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find location', undefined)
        }   else {
            const data = {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode