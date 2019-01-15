import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Body,
  Name,
  Result,
  Star,
  StarContainer
} from '../styles.js';

class Item extends Component {
  htmlDecode(encodedHTML){
    const element = document.createElement('div');
    element.innerHTML = encodedHTML;
    return element.childNodes[0].nodeValue;
  }
  render() {
    return (
      <Result>
        <StarContainer>
          {this.props.favourited ?
            <Star dangerouslySetInnerHTML={{ __html: '&#x2605'}}></Star>
          : <Star active={true}
              favourite={this.props.favourite}
              dangerouslySetInnerHTML={{ __html: '&#x2605'}}
              onClick={() => this.props.action(this.props.item)}
            ></Star>
          }
        </StarContainer>
        <Name>{this.props.item.title}</Name>
        <Body dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.item.body)}}></Body>
      </Result>
    );
  }
}

export default Item;
