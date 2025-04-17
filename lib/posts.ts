const POSTS = [
  {
    id: 1,
    title: "First post",
  },
  {
    id: 2,
    title: "Second post",
  },
  {
    id: 3,
    title: "Third post",
  },
  {
    id: 4,
    title: "Fourth post",
  },
];

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return POSTS;
}

export async function getBlogInfo() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    author: "Hrushi Borhade",
  };
}
