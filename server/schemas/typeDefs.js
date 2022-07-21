// gql tagged template function
const {gql} = require('apollo-server-express');

//typeDefs
const typeDefs = gql`
    type Query {
        test: String
    }
`;

module.exports = typeDefs;