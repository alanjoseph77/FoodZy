import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from './Redux/CartActions';


const Recipies = ({ cartItems, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleIncrementQuantity = (item) => {
    incrementQuantity(item);
  };

  const handleDecrementQuantity = (item) => {
    decrementQuantity(item);
  };

  const handleBuyNow = () => {
    // Logic for the "Buy Now" action
    
  };

  return (
    <View>
      <Text>Cart Items:</Text>
      {cartItems.map((item, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          {item.image && <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10 }} />}
          <Text>{item.title}</Text>
          <Button title="-" onPress={() => handleDecrementQuantity(item)} />
          <Text>{item.quantity}</Text>
          <Button title="+" onPress={() => handleIncrementQuantity(item)} />
          <Button title="Remove" onPress={() => handleRemoveFromCart(item)} />
        </View>
      ))}
      {cartItems.length > 0 && (
        <Button title="Buy Now" onPress={handleBuyNow} />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipies);
