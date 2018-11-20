import React, { Component } from 'react';
import MenuListItem from './MenuListItem';

class MenuList extends Component {
  render() {
    const listCreated = this.props.database.map(dish => (
      <MenuListItem
        id={dish.id}
        title={dish.title}
        price={dish.price}
        key={dish.id}
        incrementChoice={this.props.incrementChoice}
      />
    ));

    return <div>{listCreated}</div>;
  }
}

export default MenuList;
