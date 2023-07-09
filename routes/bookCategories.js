const express = require('express');
const router = express.Router();
const bookCategory = require('../models/bookCategory');

// Get All (Index)
router.get('/', (req, res) => {
    res.render('bookCategories/index');
})

module.exports = router;

//GET: bookCategories/create
router.get('/create', (req, res) => {
    res.render("bookCategories/create")
})

//GET: bookCategories/edit
router.get('/edit', (req, res) => {
    res.render("bookCategories/edit")
})