import Sequelize from "sequelize";

const sequelize = new Sequelize("noname", "postgres", "postgres", {
  dialect: "postgres",
  define: {
    underscored: true
  }
});

const models = {
  User: sequelize.import("./user"),
  Channel: sequelize.import("./channel"),
  Post: sequelize.import("./post")
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
