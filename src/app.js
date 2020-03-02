const log = console.log
const path = require("path") 
const express = require("express")
const hbs = require('hbs')

const app = express()

// define paths for express congif
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')

// hbs.registerPartials(partialsPath)
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to server
app.use(express.static(publicDirectoryPath))

// setup app
app.get('', (req, res)=>{
    res.render('index'), {
        title: 'Home Page'
    }
})

app.listen(process.env.PORT || 3000, ()=>{
    log('server is up on port 3000')
})

