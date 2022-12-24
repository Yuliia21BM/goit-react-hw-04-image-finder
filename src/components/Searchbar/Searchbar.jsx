import PropTypes from 'prop-types';

import { SearchFormHeader } from '../SearchForm/SearchForm';
import { PageHeader } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = val => {
    onSubmit(val);
  };
  return (
    <PageHeader className="searchbar">
      <SearchFormHeader onSubmitForm={handleSubmit} />
    </PageHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
