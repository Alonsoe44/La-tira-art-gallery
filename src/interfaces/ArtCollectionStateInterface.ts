import ArtCollectionInterface from "./ArtCollectionInterface";

interface ArtCollectionStateInterface {
  artCollections: ArtCollectionInterface[];
  isLoading: boolean;
  artCollection: ArtCollectionInterface;
  artCollectionHomePage: ArtCollectionInterface;
}
export default ArtCollectionStateInterface;
