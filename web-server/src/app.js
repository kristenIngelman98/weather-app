const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express() 

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Kristen Ingelman'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Kristen Ingelman'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name : 'Kristen Ingelman',
        message: 'This is some helpful text :) '
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Victoria, BC'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found!',
        name: 'Kristen Ingelman'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found!',
        name: 'Kristen Ingelman'
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})