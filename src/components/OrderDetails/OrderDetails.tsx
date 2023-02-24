import React from 'react';
import './OrderDetails.css'

interface Props extends React.PropsWithChildren{
  name:string;
  price:number;
  count:number;
}

const OrderDetails:React.FC<Props> = (props) => {
  return (
    <div style={{paddingLeft:"10px"}}>
      <p>{props.children}</p>
      <strong>{props.name}   </strong>
      <i> x{props.count}</i>
      <b> {props.price} KGZ</b>
    </div>
  );
};

export default OrderDetails;