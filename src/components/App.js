import React, { Component } from 'react';
import FavouriteList from '../containers/FavouriteList';
import ResultList from '../containers/ResultList';
import Search from '../containers/Search';
import {
  Title,
  TitleContainer,
  Wrapper
} from '../styles.js';

<<<<<<< HEAD
export default class App extends Component {
=======
class App extends Component {
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
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
<<<<<<< HEAD
=======

export default App;
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
