// https://darksky.net/dev/account
const weatherToken = process.env.WEATHER_TOKEN
// https://account.mapbox.com
const mapBox = process.env.MAPBOX_API_KEY

const sendWKey = () => {
    return weatherToken

}

const sendMKey = () =>{
    return mapBox
}

module.exports = {
    sendWKey: sendWKey,
    sendMKey: sendMKey
}