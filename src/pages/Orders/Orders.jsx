import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/Cart/OrderItem'
function Orders() {
  const {orderItem}=useSelector((state)=>state.cartState)
  return (
    <div>
      <h3>your order</h3>
      {orderItem.map((item,index)=>{
        return(
          <OrderItem item={item}/>
        )
      })}
    </div>
  )
}

export default Orders;
