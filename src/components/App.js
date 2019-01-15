import React, { Component } from 'react';
import FavouriteList from '../containers/FavouriteList';
import ResultList from '../containers/ResultList';
import Search from '../containers/Search';
import {
  Title,
  TitleContainer,
  Wrapper
} from '../styles.js';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <TitleContainer>
          <Title>Toronto Waste Lookup</Title>
        </TitleContainer>
        <Search />
        <ResultList />
        <FavouriteList />
      </Wrapper>
    );
  }
}

export default App;
