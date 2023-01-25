import PropTypes from 'prop-types';
import { useState } from 'react';

import { Modal } from '../Modal/Modal';

import {
  ImgGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, srcBig }) => {
  const [isOpenMadal, setIsOpenMadal] = useState(false);

  const handleOpenModalClick = e => {
    setIsOpenMadal(true);
    window.addEventListener('keydown', handleCloseModalEscapeClick);
  };
  const handleCloseModalEscapeClick = e => {
    if (e.code !== 'Escape') return;
    handleCloseModalClick();
  };
  const handleCloseModalClick = e => {
    setIsOpenMadal(false);
    window.removeEventListener('keydown', handleCloseModalEscapeClick);
  };
  return (
    <>
      <ImgGalleryItem onClick={handleOpenModalClick}>
        <ImageGalleryItemImage src={src} alt={alt} />
      </ImgGalleryItem>
      {isOpenMadal && (
        <Modal onClick={handleCloseModalClick} alt={alt} srcBig={srcBig} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcBig: PropTypes.string.isRequired,
};
