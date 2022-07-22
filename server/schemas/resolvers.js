const {AuthenticationError} = require('apollo-server-express');
const {Product} = require('../models');

const resolvers = {
    Query: {
        products: async () => {
            return Product.find()
            .populate('category');
        },
        product: async (parent, {name}) => {
            return Product.findOne({name})
            .populate('category');
        }
    }
};

module.exports = resolvers;