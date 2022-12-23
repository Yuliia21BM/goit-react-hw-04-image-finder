import { Component } from 'react';
// import { Box } from '../Box';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    recValue: '',
    images: [],
  };

  formSubmitHandler = request => {
    console.log(request);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery></ImageGallery>
      </>
    );
  }
}
