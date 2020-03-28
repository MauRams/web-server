//Set up packages
const path = require('path')
const express = require('express')
// this needs to be declared before the path.join
const app = express()
// provided in the wrapper function, we need to tell the app where to find the dir where the views are stored
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')
console.log(viewsPath);

// index.html page served using app.use
app.set('view engine', 'hbs')
app.set('views', viewsPath)
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