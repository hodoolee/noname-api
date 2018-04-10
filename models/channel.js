export default (sequelize, DataTypes) => {
  const Channel = sequelize.define("channel", {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Channel.associate = models => {
    Channel.hasMany(models.Post);
  };

  return Channel;
};
