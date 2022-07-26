import { gql } from '@apollo/client';

export const LOGIN = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql `
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      deliveryAddress
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const NEW_USER = gql `
mutation newUser($firstName: String!,$lastName: String!, $email: String!, $password: String!) {
  newUser(firstName: $firstName, lastName: $lastName,  email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;