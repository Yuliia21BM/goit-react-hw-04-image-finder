import PropTypes from 'prop-types';

import {
  ImgGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <ImgGalleryItem>
      <ImageGalleryItemImage src={src} alt={alt} />
    </ImgGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
