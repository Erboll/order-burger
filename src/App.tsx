import React, {useState} from 'react';
import './App.css'
import './components/Items/Items.css'
import burgerImg from './assets/burger.jpg'
import hotDogImg from './assets/hotDog.jpg'
import friesImg from './assets/fries.jpg'
import drinksImg from './assets/drinks.png'
import OrderDetails from "./components/OrderDetails/OrderDetails";
import Items from "./components/Items/Items";
import './components/OrderDetails/OrderDetails.css'

interface Item {
  name: string;
  price: number;
  count: number;
}

// const emptyDivText = <div>Order is empty! Please add some items!</div>

function App() {
  const [items,setItems] = useState( [
    {name: 'Hamburger', price: 100, images: burgerImg, count: 0, id: 0},
    {name: 'Tea', price: 30, images: drinksImg, count: 0, id: 1},
    {name: 'Fries', price: 80, images: friesImg, count: 0, id: 2},
    {name: 'Coca-Cola', price: 60, images: drinksImg, count: 0, id: 3},
    {name: 'Hot-Dog', price: 80, images: hotDogImg, count: 0, id: 4},
    {name: 'Coffee', price: 50, images: drinksImg, count: 0, id: 5},
  ]);
  const [orders, setOrders] = useState<Item[]>([]);

  const findItems = (index: number) => {
    setOrders(prevState => [...prevState, {
      name: items[index].name,
      price: items[index].price,
      count: items[index].count + 1
    }])
    setItems(prevState => {
      return prevState.map(itemCount => {
        if (index === itemCount.id) {
          return {...itemCount , count: itemCount.count +1}
        }
        return itemCount
      })
    })
  }
  return (
    <div className="container">
      <div className="orders">
        <h1>Order details</h1>
        <div>
          {orders.map(order => (
            <OrderDetails name={order.name} price={order.price * order.count} count={order.count} key={Math.random()}/>
          ))}
        </div>


      </div>

      <div className="items-border">
        <h1>Items</h1>
        <div className="items">
          {items.map((item, index) => (
            <Items key={Math.random()} clickItem={() => findItems(index)} img={item.images} title={item.name}
                   price={item.price}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
