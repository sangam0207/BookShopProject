import React from 'react';
import { useSelector } from 'react-redux';
import SingleItem from '../../components/Cart/SingleItem';
import { calculateTotals } from '../../features/cartReducer';

function Cart() {
  const { orderTotal } = useSelector((state) => state.cartState);

  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <div style={{ margin: '20px' }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <SingleItem key={item.cardId} item={item} />
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div>
          <h2>Total price: <span>{orderTotal}</span></h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
