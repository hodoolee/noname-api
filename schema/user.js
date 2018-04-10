export default `

  type User {
    id: Int!
    username: String!
    posts: [Post!]!
  }

  type Query {
    getUser(id: Int!): User!
    allUsers: [User!]!
  }
  
  type Mutation {
    createUser(username: String!, password: String!): User!
  }
  
`