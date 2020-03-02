const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/85161d79291705b75c54719700ed2992/'+latitude+','+longitude
    request({url: url, json: true}, (error, {body})=> {
        if(error) {
            callback('unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        }   else {
            const data = body.currently.icon + body.daily.data[0].summary + 'it is currently ' + body.currently.temperature + 'degrees out. There is a ' + body.currently.precipProbability + '% chance of rain'
            callback(undefined, data)
        }
    })
}

module.exports = forecast