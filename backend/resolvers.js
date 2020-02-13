const resolvers = {
      Query: {
            async user(root, { id }, { models }) {
                  return models.User.findByPk(id)
            },
            async allPosts(root, args, { models }) {
                  return models.Post.findAll()
            },
            async post(root, { id }, { models }) {
                  return models.Post.findByPk(id)
            }
      },
      Mutation: {
            async createUser(root, { name, email, password }, { models }) {
                  return models.User.create({
                        name,
                        email,
                        password
                  })
            },
            async createPost(root, { userId, post_text }, { models }) {
                  return models.Post.create({ userId, post_text })
            }
      },
      User: {
            async posts(user) {
                  return user.getPosts()
            }
      },
      Post: {
            async user(post) {
                  return post.getUser()
            }
      }
}

module.exports = resolvers