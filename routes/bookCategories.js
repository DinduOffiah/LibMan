const express = require('express');
const router = express.Router();
const bookCategory = require('../models/bookCategory');

// Get All (Index)
router.get('/', (req, res) => {
    res.render('bookCategories/index');
})

module.exports = router;