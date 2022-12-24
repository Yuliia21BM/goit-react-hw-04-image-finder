import PropTypes from 'prop-types';
import { Btn } from './Button.styled';
export const Button = ({ text }) => {
  return <Btn>{text}</Btn>;
};

Button.propTypes = {
  text: PropTypes.string,
};
