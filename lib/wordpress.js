const API_URL = 'https://public-api.wordpress.com/wp/v2/sites/theerraticthoughtsandmore.wordpress.com';

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts?_embed`);
  const posts = await response.json();
  return posts;
}

export async function getPost(slug) {
  const response = await fetch(`${API_URL}/posts?slug=${slug}&_embed&_fields=id,slug,title,content,date,tags`);
  const posts = await response.json();
  const post = posts[0];
  
  if (post && post.tags && post.tags.length > 0) {
    const tagsResponse = await fetch(`${API_URL}/tags?include=${post.tags.join(',')}`);
    const tags = await tagsResponse.json();
    post.tags = tags;
  }
  
  return post;
}