import React from 'react';
  

export default function OrderItem({ item }) {
     
    const { cardId, image, title, price } = item;
     

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

       
    </div>
  );
}
