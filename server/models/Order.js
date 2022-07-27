const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    // purchaseDate: {
    //     type: Date,
    //     default: Date.now
    // },
    // deliverAddress: {
    //     type: String
    // },
    // products: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Product'
    // }]
    name: {
        type: String
    },
    price:{
        type: Number
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;