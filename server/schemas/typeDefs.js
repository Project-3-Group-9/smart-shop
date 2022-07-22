// gql tagged template function
const {gql} = require('apollo-server-express');

//typeDefs
const typeDefs = gql`
    type Query {
        products: [Product]
        product (name: String): Product
        orders: [Order]
        order (purchaseDate: String): Order
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
`;

module.exports = typeDefs;