const postsResolvers = require("./posts");
const userResolvers = require("./users.js");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
};
