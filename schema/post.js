export default `

  type Post {
    title: String!
    body: String!
    channel: Channel!
    user: User!
  }

  type Mutation {
    createPost(channelId: Int!, title: String!, body: String!): Boolean!
  }

`;
