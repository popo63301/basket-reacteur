import React, { Component } from 'react';
import MenuListItem from './MenuListItem';

class MenuList extends Component {
  database = [
    { title: 'Kebab', price: 5 },
    { title: 'Pizza', price: 10 },
    { title: 'Croissant', price: 1 }
  ];

  render() {
    const listCreated = [];

    for (let i = 0; i < this.database.length; i++) {
      listCreated.push(
        <MenuListItem
          title={this.database[i].title}
          price={this.database[i].price}
          key={i + 't'}
        />
      );
    }

    return <div>{listCreated}</div>;
  }
}

export default MenuList;
