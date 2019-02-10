import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SearchBar,
  SearchButton,
  SearchIcon,
  SearchInput,
} from '../styles.js';

export default class Search extends Component {
  render() {
    return (
      <SearchBar>
        <SearchInput type="text" placeholder="keyword" onChange={e => this.props.updateKeyword(e.target.value)}></SearchInput>
        <SearchButton type="submit" onClick={e => { e.preventDefault(); this.props.fetchResults(); }}>
          <SearchIcon className="material-icons">search</SearchIcon>
        </SearchButton>
      </SearchBar>
    );
  }
}
