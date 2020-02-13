'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    tweet_description: DataTypes.TEXT
  }, {});
  Tweet.associate = function(models) {
    // associations can be defined here
  };
  return Tweet;
};