if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')

const app = express();

const bookCategoriesRouter = require('./routes/bookCategories')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/bookCategories', bookCategoriesRouter)

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser : true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to mongoose'))

app.listen(process.env.PORT || 3000) 