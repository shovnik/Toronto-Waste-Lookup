import React, { Component } from 'react';
import Item from './Item';
import { Results } from '../styles.js';

let key = 0;

export default class ResultList extends Component {
  render() {
    return (
      <Results>
        {this.props.results.map(item => <Item
          key={++key}
          item={item}
          favourited={!!this.props.favourites.filter(favourite => favourite.title === item.title).length}
          action={this.props.addFavourite}
        />)}
      </Results>
    );
  }
}
