const path = require('path')
const express = require('express')
// this needs to be declared before the path.join
const app = express()
// provided in the wrapper function
const publicDir = path.join(__dirname, '../public')
// index.html page served using app.use
app.set('view engine', 'hbs')
// need to tell the app where to find the dir where the view are stored
app.set('views', path.join(__dirname, '../views'))
app.use(express.static(publicDir))

/****************/
/**** Routes ****/
/****************/

// added hbs view engine
app.get('', (req, res) => {
    console.log('rendering index template');
    
    res.render('index', {
        title: 'Weather App',
        name: 'Maurice'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Maurice'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        doc_title: 'Help Page',
        title: 'Help is on the way!'
    })
})
/****************/
/** Run Server **/
/****************/
app.listen(3000, () => {
    console.log('Server is up on port 3000.');

})