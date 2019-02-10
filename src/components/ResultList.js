<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { Results } from '../styles.js';

let key = 0;

class ResultList extends Component {
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

export default ResultList;
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
