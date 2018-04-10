export default `

  type Channel {
    name: String!
    posts: [Post!]!
  }

  type Mutation {
    createChannel(name: String!): Boolean!
  }

`;