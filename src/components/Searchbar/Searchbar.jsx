import PropTypes from 'prop-types';

import {
  PageHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
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
        <SearchFormButton type="submit" className="button">
          <SearchFormButtonLabel className="button-label">
            Search
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          name="request"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </PageHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
