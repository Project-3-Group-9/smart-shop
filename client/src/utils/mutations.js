import { gql } from '@apollo/client';

export const LOGIN = gql `
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      userName
    }
  }
}
`;

export const ADD_ORDER = gql `
  mutation addOrder($name:String!,$price:Float!) {
    order(name:$name,price:$price) {
      name
    }
  }
`;

export const ADD_USER = gql `
mutation newUser(
  $userName: String!
  $email: String!
  $password: String!
) {
  newUser(
    userName: $userName
    email: $email
    password: $password
  ) {
    token
    user{
      userName
    }
  }
}
`;