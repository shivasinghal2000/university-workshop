const mutation = `
mutation CreatePost($post_text: String!) {
  createPost(
    userId: 1
    post_text: $post_text
  ) {
    id
    post_text
    user {
      id
      name
      email
    }
  }
}`;

export default mutation;
