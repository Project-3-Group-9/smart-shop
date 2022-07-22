const {AuthenticationError} = require('apollo-server-express');
const {Product, Order} = require('../models');

const resolvers = {
    Query: {
        products: async () => {
            return Product.find()
            .populate('category');
        },
        product: async (parent, {name}) => {
            return Product.findOne({name})
            .populate('category');
        },
        orders: async () => {
            return Order.find()
            .populate('products');
        },
        order: async (parent, {purchaseDate}) => {
            return Order.findOne({purchaseDate})
            .populate('products');
        }
    }
};

module.exports = resolvers;