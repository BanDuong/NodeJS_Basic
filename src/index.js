// more import
const express = require('express')
const morgan = require('morgan')
const  { engine }  = require('express-handlebars'); //handle
const path = require('path')
const route = require('./routers/indexRouter') // add routers
// import MongoDB
const MongoDb = require('./config/db/indexDb')

//core
const app = express()
const port = 3000

// connect DB
MongoDb.connect()

// set statics file
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined')) //morgan

// template handlebar
app.engine('hbs', engine({extname: 'hbs'})); //handle
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/resources/views')) // 

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})

