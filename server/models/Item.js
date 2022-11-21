const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        enum: ['Fruits and vegetables', 'Meat and fish', 'Beverages', 'Pets', 'Misc'],
        require: true,
    },
    image: String,
    note: String,
    users: [
        {
            uid: {
                type: String
            }
        }
    ],
    default: {
        type: Boolean,
        default: false
    }
})

const itemModel = new mongoose.model('items', itemSchema)

module.exports = itemModel