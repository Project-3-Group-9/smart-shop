// gql tagged template function
const {gql} = require('apollo-server-express');

//typeDefs
const typeDefs = gql`
    type Query {
        products: [Product]
        product (name: String): Product
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
`;

module.exports = typeDefs;