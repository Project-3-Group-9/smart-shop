const {AuthenticationError} = require('apollo-server-express');
const {Product, Order, Category} = require('../models');

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
        },
        categories: async () => {
            return Category.find();
        },
        category: async (parent, {name}) => {
            return Category.findOne({name})
        }
    }
};

module.exports = resolvers;