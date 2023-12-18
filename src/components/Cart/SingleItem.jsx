import React from 'react';
import { useDispatch } from "react-redux";
import { orderItem, removeItem } from "../../features/cartReducer";


export default function SingleItem({ item }) {
    const dispatch = useDispatch();
    const { cartId, image, title, price } = item;
     const onRemove = (id) => {
        dispatch(removeItem(  item ));
         
      };
      const onCheck=()=>{
        dispatch(orderItem({product:item}));
        dispatch(removeItem(  item ));
        alert("item ordered successfully")
      }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px' }}>
      <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
        <img src={image} alt={title} style={{ maxWidth: '100px', marginRight: '10px' }} />
        <div>
          <h3 style={{ margin: '0', marginBottom: '5px' }}>{title}</h3>
          <p style={{ margin: '0', color: '#888' }}>Price: ${price}</p>
          {/* Add other properties as needed */}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer' }} onClick={() => onRemove({cartId})}>
          Remove Item
        </button>
        <button style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer' }} onClick={() => onCheck()} >
          Checkout
        </button>
      </div>
    </div>
  );
}
