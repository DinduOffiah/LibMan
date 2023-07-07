const mongoose = require('mongoose');

const bookCategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('bookCategory', bookCategorySchema)