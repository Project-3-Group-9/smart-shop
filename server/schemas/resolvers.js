const {AuthenticationError} = require('apollo-server-express');
const {Product} = require('../models');

const resolvers = {
    Query: {
        products: async () => {
            return Product.find()
            .populate('category');
        }
    }
};

module.exports = resolvers;