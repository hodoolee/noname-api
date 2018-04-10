export default (sequelize, DataTypes) => {
  const Post = sequelize.define("post", {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.TEXT
    }
  });

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        field: "user_id"
      }
    });
    Post.belongsTo(models.Channel, {
      foreignKey: {
        name: "channelId",
        field: "channel_id"
      }
    });
  };

  return Post;
};
