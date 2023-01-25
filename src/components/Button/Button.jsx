import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ onLoadMore, text }) => {
  const handleClick = e => {
    onLoadMore(e);
  };
  return <Btn onClick={handleClick}>{text}</Btn>;
};

Button.propTypes = {
  text: PropTypes.string,
};
