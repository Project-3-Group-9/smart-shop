import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql `
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql `
  query {
    products {
     name
     image
     price
     quantity
     category{
      name
     }
    }
  }
`;
export const QUERY_ORDERS= gql `
query($email:String!) {
  user(email:$email) {
    orders{
      name
      price
    }
  }
}
`;

export const QUERY_CATEGORIES = gql `
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql `
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        deliveryAddress
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;