const {AuthenticationError} = require('apollo-server-express');
const {Product, Order, Category, User} = require('../models');
const {signToken} = require('../utils/auth');


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
            return Category.findOne({name});
        },
        users: async () => {
            return User.find()
            .populate('orders');
        },
        user: async (parent, {email}) => {
            return User.findOne({email})
            .populate('orders');
        }
    },
    Mutation: {
        newUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if(!user) {
                throw new AuthenticationError('Your credentials are incorrect');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Your credentials are incorrect');
            }

            const token = signToken(user);
            return {token, user};
        }
    }
};

module.exports = resolvers;