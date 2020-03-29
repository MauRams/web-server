//Set up packages
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
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

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide a valid address'
        })
    }
    //setting up a default parameter prevents the application crashing
    geocode(req.query.address, (error, { latitude, longitude, location }= {}) => {

        if (error) {
            return res.send({ error })
        } else {
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error })
                }
                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
            })
        }


    })
})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'you must provide a search term'
        })
    }

    console.log(req.query.search);

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Maurice',
        errorMessage: 'Article Not Found'
    })
})

// 404
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Maurice',
        errorMessage: 'Page Not Found'
    })
})



/****************/
/** Run Server **/
/****************/
app.listen(3000, () => {
    console.log('Server is up on port 3000.');

})