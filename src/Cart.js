import React, { Component } from 'react';
import CartChoiceItem from './CartChoiceItem';

class Cart extends Component {
  renderContent = () => {
    if (this.props.choicesList.length !== 0) {
      const list = this.props.choicesList.map(choice => (
        <CartChoiceItem
          title={choice.title}
          quantity={choice.quantity}
          price={choice.price}
        />
      ));

      return list;
    }

    return 'Votre panier est vide.';
  };

  render() {
    return (
      <div
        style={{
          border: '2px solid black',
          height: '300px',
          width: '300px',
          marginLeft: '40px',
          marginTop: '20px'
        }}
      >
        {this.renderContent()}
      </div>
    );
  }
}

export default Cart;
