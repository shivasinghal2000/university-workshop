const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        posts: [Post!]!
      }

    type Post {
        id: Int!
        post_text: String!
        user: User!
    }

    type Query {
        user(id: Int!): User
        allPosts: [Post!]!
        post(id: Int!): Post
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!): User!
        createPost(
          userId: Int!
          post_text: String!
        ): Post!
    }
`

module.exports = typeDefs