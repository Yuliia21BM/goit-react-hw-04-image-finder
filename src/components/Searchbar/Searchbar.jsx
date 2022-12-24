import PropTypes from 'prop-types';

import {
  PageHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonImg,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const {
      elements: { request },
    } = e.currentTarget;

    if (request.value.trim() !== '') {
      onSubmit(request.value.trim());
    }
    e.currentTarget.reset();
  };
  return (
    <PageHeader className="searchbar">
      <SearchForm className="form" onSubmit={handleSubmit}>
        <SearchFormInput
          className="input"
          type="text"
          name="request"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <SearchFormButton type="submit" className="button">
          <SearchFormButtonImg src={require('../../imgs/serchBtn.png')} />
        </SearchFormButton>
      </SearchForm>
    </PageHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
