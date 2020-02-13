'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    post_text: DataTypes.TEXT
  }, {});
  Post.associate = function (models) {
    Post.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Post;
};