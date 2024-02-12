// more import
const express = require('express')
// import express from 'express';

const morgan = require('morgan')
const  { engine }  = require('express-handlebars'); //handle
// import { engine } from 'express-handlebars';

const path = require('path')

const app = express()
const port = 3000

// set statics file
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined')) //morgan

// template handlebar
app.engine('hbs', engine({extname: 'hbs'})); //handle
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/resources/views')) // 

app.get('/', (req, res) => {
  res.render('home')
})

// news page
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

