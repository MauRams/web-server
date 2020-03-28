const request = require('request')
// get your own tokens by signing up at https://darksky.net
const getToken = require('../tokens')
const wt = getToken.sendWKey().toString()
// shorthand syntax & destructuring
const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + wt + '/'
        + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '?units=si'

    request({url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather Service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                body.daily.data[0].summary +
                ' it is currently ' + body.currently.temperature + ' degrees out. There is a ' +
                body.currently.precipProbability + '%' + ' chance of rain'
            )
        }
    })
}

module.exports = forecast