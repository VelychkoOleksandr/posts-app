import { createContext } from "react";
import PostsApiService from "../services/posts-api-service";

const PostsAPIServiceContext = createContext(new PostsApiService());

export default PostsAPIServiceContext;