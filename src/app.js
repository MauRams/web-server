const path = require('path')
const express = require('express')
// this needs to be declared before the path.join
const app = express()
// provided in the wrapper function
const publicDir = path.join(__dirname, '../public')
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