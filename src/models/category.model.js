const mongoose = require('mongoose');

// subject schema
const CategorySchema = new mongoose.Schema ({
                //collection
    type: { type: String, require: true, trim: true },
    vehicles: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'vehicles' }]
});

const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;