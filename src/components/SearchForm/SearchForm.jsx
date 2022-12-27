import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonImg,
  SearchFormInput,
} from './SearchForm.styled';

export class SearchFormHeader extends Component {
  state = {
    request: '',
  };
  handleChange = e => {
    this.setState({ request: e.target.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { request } = this.state;
    if (request.trim() === '') {
      toast('Write some request!');
      return;
    }
    this.props.onSubmitForm(request);
    this.setState({ request: '' });
  };

  render() {
    const { request } = this.state;
    return (
      <SearchForm onSubmit={this.handleSubmitForm}>
        <SearchFormInput
          type="text"
          name="request"
          autoComplete="off"
          autoFocus
          value={request}
          onChange={this.handleChange}
          placeholder="Search images and photos"
        />
        <SearchFormButton type="submit">
          <SearchFormButtonImg src={require('../../imgs/serchBtn.png')} />
        </SearchFormButton>
      </SearchForm>
    );
  }
}
