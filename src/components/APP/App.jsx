import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ScrollToTop } from '../ButtonScrollToTop/ButtonScrollToTop';

export class App extends Component {
  state = {
    recValue: '',
  };

  formSubmitHandler = request => {
    this.setState({ recValue: request });
  };

  render() {
    const { recValue } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery recValue={recValue} />

        <ScrollToTop />

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
