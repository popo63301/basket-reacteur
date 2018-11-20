import React, { Component } from 'react';

class CartChoiceItem extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div style={{ display: 'flex' }}>
        <button>+</button>
        <div>{this.props.quantity}</div>
        <button>-</button>
        <div>{this.props.title}</div>
        <div style={{ marginLeft: '15px' }}>
          {this.props.quantity * this.props.price} €
        </div>
      </div>
    );
  }
}

export default CartChoiceItem;
