const query = `
{
  allPosts {
    id
    user {
      name
      email
    }
    post_text
  }
}
`;
export default query;
