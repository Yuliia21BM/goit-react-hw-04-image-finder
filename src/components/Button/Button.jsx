import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ text, onLoadMore }) => {
  return <Btn onClick={onLoadMore}>{text}</Btn>;
};

Button.propTypes = {
  text: PropTypes.string,
};
