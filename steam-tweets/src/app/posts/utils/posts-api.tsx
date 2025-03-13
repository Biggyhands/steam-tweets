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
