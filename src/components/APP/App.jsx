import { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from '../Box';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { SoryNotification } from '../SoryNotification/SoryNotification';

export class App extends Component {
  state = {
    recValue: '',
    images: [],
    pageCounter: 1,
    isLoading: false,
    isImages: true,
    isBtnVisible: false,
    totalPages: 0,
  };

  formSubmitHandler = async request => {
    await this.setState({ pageCounter: 1, recValue: request });
    const { recValue } = this.state;
    await this.axiosRequest(recValue);
  };

  async axiosRequest(request) {
    this.setState({ isLoading: true, isImages: true, isBtnVisible: false });
    const url = `https://pixabay.com/api/?q=${request}&page=${this.state.pageCounter}&key=31109678-013e606e285b36a60c72d34b0&image_type=photo&orientation=horizontal&per_page=12`;
    await axios
      .get(url)
      .then(res => {
        const { data } = res;
        if (data.total === 0) {
          this.setState({ isImages: false, isBtnVisible: false, images: [] });
          return;
        } else if (data.total <= 12) {
          this.setState({ isBtnVisible: false });
        } else if (data.total > 12) {
          this.setState({ isBtnVisible: true });
        }
        if (this.state.pageCounter === 1) {
          toast(`We found ${data.total} images`, {
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
        return data;
      })
      .then(({ hits }) => {
        console.log(hits);
        if (this.state.pageCounter === 1) {
          this.setState({ images: hits });
        } else {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...hits],
            };
          });
        }
        this.setState(prevState => {
          return {
            pageCounter: prevState.pageCounter + 1,
          };
        });
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  loadMore = e => {
    const { recValue } = this.state;
    this.axiosRequest(recValue);
  };

  render() {
    const { isLoading, images, isImages, isBtnVisible } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery>
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
        </ImageGallery>

        {isBtnVisible && (
          <Box display="flex" justifyContent="center" width="100%">
            <Button onLoadMore={this.loadMore} text="Load more" />
          </Box>
        )}

        {isLoading && <Loader />}

        {!isImages && <SoryNotification />}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );
  }
}
