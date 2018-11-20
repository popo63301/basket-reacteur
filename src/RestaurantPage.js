import React, { Component } from 'react';

import MenuList from './MenuList';
import Cart from './Cart';

class RestaurantPage extends Component {
  state = {
    database: [
      { id: 1, title: 'Kebab', price: 5 },
      { id: 2, title: 'Pizza', price: 10 },
      { id: 3, title: 'Croissant', price: 1 }
    ],

    databaseTwo: {
      1: { id: 1, title: 'Kebab', price: 5 },
      2: { id: 2, title: 'Pizza', price: 10 },
      3: { id: 3, title: 'Croissant', price: 1 }
    },
    choicesList: []
  };

  incrementChoice = dishId => {
    let done = false;

    const newChoicesList = this.state.choicesList.map(choice => {
      if (choice.dishId === dishId) {
        const newChoice = { ...choice, quantity: choice.quantity + 1 };
        done = true;
        return newChoice;
      }

      return choice;
    });

    if (!done) {
      const newChoice = this.state.databaseTwo[dishId];
      newChoicesList.push({
        dishId: dishId,
        title: newChoice.title,
        quantity: 1,
        price: newChoice.price
      });
    }

    this.setState({
      choicesList: newChoicesList
    });
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <MenuList
          database={this.state.database}
          incrementChoice={this.incrementChoice}
        />
        <Cart choicesList={this.state.choicesList} />
      </div>
    );
  }
}

export default RestaurantPage;
