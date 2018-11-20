import React, { Component } from 'react';

class MenuListItem extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '20px',
          border: '1px solid black',
          width: '300px',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          justifyContent: 'space-between'
        }}
        onClick={() => this.props.incrementChoice(this.props.id)}
      >
        <div>{this.props.title}</div>
        <div>{this.props.price} €</div>
      </div>
    );
  }
}

export default MenuListItem;
