import { Component } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

import { Box } from '../Box';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export class App extends Component {
  state = {
    recValue: '',
    images: [],
    pageCounter: 1,
    isLoading: false,
    isImages: true,
    isBtnVisible: false,
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
          this.setState({ isImages: false, isBtnVisible: false });
        } else if (data.total <= 12) {
          this.setState({ isBtnVisible: false });
        }
        return data;
      })
      .then(({ hits }) => {
        this.setState({ images: hits, isBtnVisible: true });
        this.setState(prevState => {
          return {
            pageCounter: prevState.pageCounter + 1,
            // images: prevState.images.push(hits),
          };
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  loadMore() {
    const { recValue } = this.state;
    this.axiosRequest(recValue);
  }

  render() {
    const { isLoading, images, isImages, isBtnVisible, loadMore } = this.state;
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
                />
              );
            })}
        </ImageGallery>

        {isBtnVisible && (
          <Box display="flex" justifyContent="center" width="100%">
            <Button onLoadMore={loadMore} text="Load more" />
          </Box>
        )}

        {isLoading && (
          <Box display="flex" justifyContent="center" width="100%">
            <MutatingDots
              height="150"
              width="150"
              color="#790964"
              secondaryColor="#fff"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              alignSelf="center"
            />
          </Box>
        )}

        {!isImages && (
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            fontSize="30px"
            color="#fff"
          >
            Sorry. We don't have such images :(
          </Box>
        )}

        <ToastContainer
          // position="top-right"
          autoClose={3000}
          // hideProgressBar={false}
          // newestOnTop={false}
          // closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
          // theme="light"
        />
      </>
    );
  }
}
