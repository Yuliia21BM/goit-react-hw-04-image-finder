import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ImageGalleryList } from './ImageGallery.styled';

import { Box } from '../Box';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { SoryNotification } from '../SoryNotification/SoryNotification';

export const ImageGallery = ({ recVal }) => {
  const [recValue, setRecValue] = useState('');
  const [images, setImages] = useState([]);
  const [pageCounter, setPageCounter] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isImages, setIsImages] = useState(true);
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  useEffect(() => {
    if (recVal.trim() === '') return;
    setRecValue(recVal);
    setPageCounter(1);
    setIsLoading(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [recVal]);

  useEffect(() => {
    if (recValue === '') return;

    async function axiosRequest(request) {
      setIsLoading(true);
      setIsImages(true);
      setIsBtnVisible(false);
      const url = `https://pixabay.com/api/?q=${request}&page=${pageCounter}&key=31109678-013e606e285b36a60c72d34b0&image_type=photo&orientation=horizontal&per_page=12`;
      await axios
        .get(url)
        .then(res => {
          const { data } = res;
          const { hits, totalHits, total } = data;
          if (total === 0) {
            setIsImages(false);
            setIsBtnVisible(false);
            setImages([]);
            return;
          } else if (total <= 12) {
            setIsBtnVisible(true);
          } else if (total > 12) {
            setIsBtnVisible(true);
          }
          if (pageCounter === 1) {
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
          if (pageCounter === 1) {
            setImages(hits);
          } else {
            setImages(images => [...images, ...hits]);
          }
          if (totalHits === 500 && pageCounter === 42) {
            setIsBtnVisible(false);
          } else if (Math.ceil(totalHits / 12) === pageCounter) {
            setIsBtnVisible(false);
          }
        })
        .catch(error => console.log(error.message))
        .finally(() => setIsLoading(false));
    }

    axiosRequest(recValue);
  }, [pageCounter, recValue]);

  const loadMore = e => {
    setPageCounter(pageCounter => pageCounter + 1);
  };

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
          <Button onLoadMore={loadMore} text="Load more" />
        </Box>
      )}

      {isLoading && <Loader />}

      {!isImages && <SoryNotification />}
    </>
  );
};
