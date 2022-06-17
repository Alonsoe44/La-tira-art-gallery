import PaintingInterface from "./PaintingInterface";

interface AuthorInterface {
  _id?: string;
  name: string;
  textDescription: string;
  paintings: PaintingInterface[];
}

export default AuthorInterface;
