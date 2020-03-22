const path = require('path')
const express = require('express')
// provided in the wrapper function
const publicDir = path.join(__dirname, '../public')

const app = express()
// index.html page served using app.use
app.use(express.static(publicDir))

/****************/
/**** Routes ****/
/****************/

/****************/
/** Run Server **/
/****************/
app.listen(3000, () => {
    console.log('Server is up on port 3000.');

})