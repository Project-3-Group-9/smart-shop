// gql tagged template function
const { gql } = require('apollo-server-express');

//typeDefs
const typeDefs = gql `
    type Query {
        products: [Product]
        product (name: String): Product
        orders: [Order]
        order (purchaseDate: String): Order
        categories: [Category]
        category (name: String): Category
        users: [User]
        user (email: String): User
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        newUser(userName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        order(name:String!,price:Float):Order
    }

    type Auth {
        token: ID!
        user: User
    }

    type Product {
        name: String
        description: String
        image: String
        price: Float
        quantity: Int
        category: Category
    }

    type Category {
        name: String
    }


  type Order {
         name:String
         price:Float
    }
    type Items {
        name:String
        price:Float
   }

    type User {
        userName:String
        email: String
        password: String
        orders: [Order]
    }
`;

module.exports = typeDefs;