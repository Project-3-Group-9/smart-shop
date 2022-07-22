// gql tagged template function
const {gql} = require('apollo-server-express');

//typeDefs
const typeDefs = gql`
    type Query {
        products: [Product]
        product (name: String): Product
        orders: [Order]
        order (purchaseDate: String): Order
        categories: [Category]
        category (name: String): Category
        users: [User]
        user (email: String): User
    }

    type Product {
        name: String
        description: String
        image: String
        price: Int
        quantity: Int
        category: Category
    }

    type Category {
        name: String
    }

    type Order {
        purchaseDate: String
        products: [Product]
    }

    type User {
        firstName: String
        lastName: String
        email: String
        password: String
        orders: [Order]
    }
`;

module.exports = typeDefs;