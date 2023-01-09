import { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImageGalleryList } from './ImageGallery.styled';

import { Box } from '../Box';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { SoryNotification } from '../SoryNotification/SoryNotification';

export class ImageGallery extends Component {
  state = {
    recValue: '',
    images: [],
    pageCounter: 1,
    isLoading: false,
    isImages: true,
    isBtnVisible: false,
  };

  componentDidUpdate(prewProps, prevState) {
    if (
      prewProps.recValue !== this.props.recValue &&
      this.props.recValue.trim() !== ''
    ) {
      this.setState({
        recValue: this.props.recValue,
        pageCounter: 1,
        isLoading: false,
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (
      prevState.pageCounter !== this.state.pageCounter ||
      prevState.recValue !== this.state.recValue
    ) {
      const { recValue } = this.state;
      this.axiosRequest(recValue);
    }
  }

  async axiosRequest(request) {
    this.setState({ isLoading: true, isImages: true, isBtnVisible: false });
    const url = `https://pixabay.com/api/?q=${request}&page=${this.state.pageCounter}&key=31109678-013e606e285b36a60c72d34b0&image_type=photo&orientation=horizontal&per_page=12`;
    await axios
      .get(url)
      .then(res => {
        const { data } = res;
        const { hits, totalHits, total } = data;
        if (total === 0) {
          this.setState({ isImages: false, isBtnVisible: false, images: [] });
          return;
        } else if (total <= 12) {
          this.setState({ isBtnVisible: false });
        } else if (total > 12) {
          this.setState({ isBtnVisible: true });
        }
        if (this.state.pageCounter === 1) {
          toast(`We found ${total} images`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
        if (this.state.pageCounter === 1) {
          this.setState({ images: hits });
        } else {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...hits],
            };
          });
        }
        if (totalHits === 500 && this.state.pageCounter === 42) {
          this.setState({ isBtnVisible: false });
        } else if (Math.ceil(totalHits / 12) === this.state.pageCounter) {
          this.setState({ isBtnVisible: false });
        }
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  loadMore = e => {
    this.setState(prevState => {
      return {
        pageCounter: prevState.pageCounter + 1,
      };
    });
  };

  render() {
    const { isLoading, images, isImages, isBtnVisible } = this.state;
    return (
      <>
        <ImageGalleryList>
          {images &&
            images.map(img => {
              return (
                <ImageGalleryItem
                  key={img.id}
                  src={img.webformatURL}
                  alt={img.tags}
                  srcBig={img.largeImageURL}
                />
              );
            })}
        </ImageGalleryList>
        {isBtnVisible && (
          <Box display="flex" justifyContent="center" width="100%">
            <Button onLoadMore={this.loadMore} text="Load more" />
          </Box>
        )}

        {isLoading && <Loader />}

        {!isImages && <SoryNotification />}
      </>
    );
  }
}
