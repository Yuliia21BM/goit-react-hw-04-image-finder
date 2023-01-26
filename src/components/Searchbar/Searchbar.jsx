import PropTypes from 'prop-types';

import { SearchFormHeader } from '../SearchForm/SearchForm';
import { PageHeader } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <PageHeader className="searchbar">
      <SearchFormHeader onSubmitForm={onSubmit} />
    </PageHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
