export default {
  Mutation: {
    createPost: async (parent, args, { models, user }) => {
      try {
        await models.Post.create({
          ...args,
          userId: user.id
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }
};
