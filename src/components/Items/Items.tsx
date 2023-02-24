import React from 'react';
import './Items.css';

interface Props {
  img: string;
  title: string;
  price: number;
  clickItem:React.MouseEventHandler
}

const Items: React.FC<Props> = ({img, title, price, clickItem}) => {
  return (
    <div className="divItems" onClick={clickItem}>
      <div>
        <img src={img} alt="#"/>
        <span>Price : {price}</span>
      </div>
      <h3>{title}</h3>
    </div>

  );
};

export default Items;