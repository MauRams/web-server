const express = require('express')

const app = express()

/****************/
/**** Routes ****/
/****************/
app.get('', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Maurice',
        Age: 36
    }, {
        name: 'Iwonka'
    }

    ])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'forecast',
        location: 'location'
    })
})

/****************/
/** Run Server **/
/****************/
app.listen(3000, () => {
    console.log('Server is up on port 3000.');

})