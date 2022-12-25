import { Component } from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export class Button extends Component {
  handleClick = e => {
    this.props.onLoadMore(e);
  };
  render() {
    return <Btn onClick={this.handleClick}>{this.props.text}</Btn>;
  }
}

Button.propTypes = {
  text: PropTypes.string,
};
