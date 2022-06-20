import AuthorInterface from "./AuthorInterface";

interface AuthorStateInterface {
  authors: AuthorInterface[];
  isLoading: boolean;
  author: AuthorInterface;
}

export default AuthorStateInterface;
