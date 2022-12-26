import { ImageGalleryList } from './ImageGallery.styled';
export const ImageGallery = ({ children }) => {
  const handleClick = e => {};
  return <ImageGalleryList onClick={handleClick}>{children}</ImageGalleryList>;
};
