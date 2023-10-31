const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    username: String!
    todos: [Todo]
  }

  type Todo {
    id: ID!
    title: String!
  }

  type Query {
    getUser(id: ID!): User
  }
`;