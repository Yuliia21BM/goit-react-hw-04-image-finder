import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonImg,
  SearchFormInput,
} from './SearchForm.styled';

export const SearchFormHeader = ({ onSubmitForm }) => {
  const [request, setRequest] = useState('');

  const handleChange = e => {
    setRequest(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (request.trim() === '') {
      toast('Write some request!');
      return;
    }
    onSubmitForm(request);
    setRequest('');
  };

  return (
    <SearchForm onSubmit={handleSubmitForm}>
      <SearchFormInput
        type="text"
        name="request"
        autoComplete="off"
        autoFocus
        value={request}
        onChange={handleChange}
        placeholder="Search images and photos"
      />
      <SearchFormButton type="submit">
        <SearchFormButtonImg src={require('../../imgs/serchBtn.png')} />
      </SearchFormButton>
    </SearchForm>
  );
};
