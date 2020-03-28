//Set up packages
const path = require('path')
const express = require('express')
const hbs = require('hbs')
// this needs to be declared before the path.join
const app = express()

// Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//setup static dir to serve
app.use(express.static(publicDir))

/****************/
/**** Routes ****/
/****************/

// root
app.get('', (req, res) => {   
    res.render('index', {
        title: 'Weather App',
        name: 'Maurice'
    })
})
// about
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Maurice'
    })
})
// help
app.get('/help', (req, res) => {
    res.render('help', {
        doc_title: 'Help Page',
        helpText: 'This is some help text',        
        title: 'Help is on the way!',
        name: 'Maurice'
    })
})


/****************/
/** Run Server **/
/****************/
app.listen(3000, () => {
    console.log('Server is up on port 3000.');

})