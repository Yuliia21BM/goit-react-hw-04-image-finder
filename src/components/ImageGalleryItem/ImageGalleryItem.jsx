import PropTypes from 'prop-types';
import { Component } from 'react';

import { Modal } from '../Modal/Modal';

import {
  ImgGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpenMadal: false,
  };
  handleOpenModalClick = e => {
    this.setState({ isOpenMadal: true });
    window.addEventListener('keydown', this.handleCloseModalClick);
  };
  handleCloseModalClick = e => {
    if (e.code === 'Escape') {
      this.setState({ isOpenMadal: false });
    }
    return () =>
      window.removeEventListener('keydown', this.handleCloseModalClick);
  };
  render() {
    const { isOpenMadal } = this.state;
    const { src, alt, srcBig } = this.props;
    return (
      <>
        <ImgGalleryItem onClick={this.handleOpenModalClick}>
          <ImageGalleryItemImage src={src} alt={alt} />
        </ImgGalleryItem>
        {isOpenMadal && <Modal alt={alt} srcBig={srcBig} />}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcBig: PropTypes.string.isRequired,
};
