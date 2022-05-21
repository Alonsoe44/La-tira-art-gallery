import PaintingInterface from "./PaintingInterface";

interface ArtCollectionInterface {
  title?: string;
  author?: string;
  smallDescription?: string;
  description?: string;
  bannerImage?: string;
  paintings?: string[] | PaintingInterface[];
  _id?: string;
}

export default ArtCollectionInterface;
