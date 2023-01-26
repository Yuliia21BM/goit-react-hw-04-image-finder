import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ScrollToTop } from '../ButtonScrollToTop/ButtonScrollToTop';

export const App = () => {
  const [recValue, setRecValue] = useState('');

  return (
    <>
      <Searchbar onSubmit={setRecValue} />
      <ImageGallery recVal={recValue} />

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
};
