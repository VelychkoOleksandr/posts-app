import { createContext } from "react";
import UsersApiService from "../services/users-api-service";

const UsersAPIServiceContext = createContext(new UsersApiService());

export default UsersAPIServiceContext;