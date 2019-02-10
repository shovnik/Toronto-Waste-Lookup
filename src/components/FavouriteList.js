<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { Favourites, SubTitle } from '../styles.js';

let key = 0;

export default class FavouriteList extends Component {
  render() {
    return (
      <Favourites>
        <SubTitle>Favourites</SubTitle>
        <ul>
          {this.props.favourites.map(item => <Item
            key={++key}
            item={item}
            favourite={true}
            action={this.props.removeFavourite}
          />)}
        </ul>
      </Favourites>
    );
  }
}
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { Favourites, SubTitle } from '../styles.js';

let key = 0;

class FavouriteList extends Component {
  render() {
    return (
      <Favourites>
        <SubTitle>Favourites</SubTitle>
        <ul>
          {this.props.favourites.map(item => <Item
            key={++key}
            item={item}
            favourite={true}
            action={this.props.removeFavourite}
          />)}
        </ul>
      </Favourites>
    );
  }
}

export default FavouriteList;
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
