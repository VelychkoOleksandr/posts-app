import { createContext } from "react";
import CommentsApiService from "../services/comments-api-service";

const CommentsAPIServiceContext = createContext(new CommentsApiService());

export default CommentsAPIServiceContext;