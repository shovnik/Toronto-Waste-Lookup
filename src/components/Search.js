<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SearchBar,
  SearchButton,
  SearchIcon,
  SearchInput,
} from '../styles.js';

class Search extends Component {
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

export default Search;
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
