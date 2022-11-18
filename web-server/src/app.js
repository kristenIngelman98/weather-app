const path = require('path')
const express = require('express')

const app = express() 
console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Victoria, BC'
    })
})
app.listen(3000, () => {
    console.log('Server running on port 3000')
})