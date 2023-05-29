import { createContext } from "react";
import posts from "../data/posts";

const PostsContext = createContext({
  posts,
  setPosts: () => {},
});

export default PostsContext;
