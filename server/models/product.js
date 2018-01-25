var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        minlength: 4,
    },
    image: { 
        type: String,
        required: [true, 'Image is required.'],
        minlength: 1,
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required.'],
        default: 0,
    },
}, { timestamps: true })
mongoose.model('Product', ProductSchema);