import React, { useState } from 'react'
import { OrderCardContainer, OrderCardContent } from './styled'
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/UseRequestData';

const OrderCard = (props) => {

  const order = useRequestData([], `${BASE_URL}/orders/history`);
  const [history, setHistory] = useState([])
  React.useEffect(() => {
    console.log(order, localStorage.getItem('token'))

  }, [order])

  return (
   <OrderCardContainer>
       <OrderCardContent>Card</OrderCardContent>
   </OrderCardContainer>
  )
}

export default OrderCard
