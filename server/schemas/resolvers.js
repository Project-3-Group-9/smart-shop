const { AuthenticationError } = require('apollo-server-express');
const { Product, Order, Category, User } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
        products: async() => {
            return Product.find()
                .populate('category');
        },
        product: async(parent, { name }) => {
            return Product.findOne({ name })
                .populate('category');
        },
        orders: async() => {
            return Order.find();
        },
        order: async(parent, { purchaseDate }) => {
            return Order.findOne({ purchaseDate })
                .populate('products');
        },
        categories: async() => {
            return Category.find();
        },
        category: async(parent, { name }) => {
            return Category.findOne({ name });
        },
        users: async() => {
            return User.find()
                .select('-__v -password')
                .populate('orders');
        },
        user: async(parent, { email }) => {
            return User.findOne({ email })
                .select('-__v -password')
                .populate('orders');
        },
        me: async(parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ email: context.user.email })
                    .select('-__v -password')
                    .populate('orders');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        newUser: async(parent, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Your credentials are incorrect');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Your credentials are incorrect');
            }

            const token = signToken(user);
            return { token, user };
        },
        addOrder: async(parent, { products, purchaseDate, deliveryAddress }, context) => {
            console.log("here");
            console.log(context);
            if (context.user) {
                const order = new Order({ products, purchaseDate, deliveryAddress });

                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

                return order;
            }

            throw new AuthenticationError('Not logged in');
        },
        order: async(parent,{name,price},context) => {
            let email = context.user.email;
            const user = await User.findOne({ email });
            if (context.user) {
                const order = new Order({name,price});
                await User.findByIdAndUpdate(user._id, { $push: { orders: order } });
                return order;
            }
            throw new AuthenticationError('Not logged in');
        },
    }
};

module.exports = resolvers;