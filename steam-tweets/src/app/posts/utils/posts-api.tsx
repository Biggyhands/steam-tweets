export const getPosts = async (
  pageSize: number,
  page: number
): Promise<any> => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const json = await response.json();

  const pagedResults = json.slice(startIndex, endIndex);

  return pagedResults;
};

export const getPostById = async (id: number): Promise<any> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return response.json();
};

export const getCommentsByPostId = async (postId: number): Promise<any> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return response.json();
};
