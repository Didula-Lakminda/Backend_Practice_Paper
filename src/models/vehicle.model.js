const mongoose = require('mongoose');

// subject schema
const VehicleSchema = new mongoose.Schema ({
    code: { type: String, require: true, trim: true },
    model: { type: String, require: true, trim: true },
    type: { type: String, require: true, trim: true },
    name: { type: String, require: true, trim: true }, 
    price: { type: Number, require: true },                 //collection
    categories: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'categories' }]
});

const Vehicle = mongoose.model('vehicles', VehicleSchema);

module.exports = Vehicle;