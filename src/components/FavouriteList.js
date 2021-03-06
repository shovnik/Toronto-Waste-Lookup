import React, { Component } from 'react';
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
