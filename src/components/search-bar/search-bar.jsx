
import React, { Component } from "react";
import { BsSearch } from 'react-icons/bs';
import { SearchBarContainer, SearchForm, SearchFormButton, SearchFormInput } from './search-bar.styled';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
    state = {
        searchRequest: ''
    }


    onFormSubmit = e => {
        e.preventDefault()

        this.props.onSubmitHandler(this.state.searchRequest.trim())
    }

    onChange = e => {
        this.setState({
            searchRequest: e.target.value
        })
    }


render(){
    return (
      <SearchBarContainer>
        <SearchForm onSubmit={this.onFormSubmit}>
          <label htmlFor="searchInput">
            <SearchFormInput
              type="text"
              name="searchInput"
              onChange={this.onChange}
              value={this.state.searchRequest}
              placeholder='search...'
            />
          </label>
          <SearchFormButton type="submit">
            <BsSearch></BsSearch>
          </SearchFormButton>
        </SearchForm>
      </SearchBarContainer>
    );
    }
}

SearchBar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired
}