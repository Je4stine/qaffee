import React, {useState, createContext} from 'react';

import { getProduct } from '../Components/ProductList/Products';

const AppContext = createContext();

const AppProvider = ({ children}) => {
  const [increment, setIncrement]= useState(1);
  const [items, setItems] = useState([]);
  const [location, setLocation]  = useState(null);
  const  [ myAddress, setMyAddress]= useState('');

  function addItemToCart(id) {

    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.price,
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
};


// function getItemsCount() {
//   return items.reduce((sum, item) => (sum + item.qty), 0);
// }

function getItemsCount() {
  const itemCounts = {};
  items.forEach((item) => {
    if (itemCounts[item.id]) {
      itemCounts[item.id] += item.qty;
    } else {
      itemCounts[item.id] = item.qty;
    }
  });
  return itemCounts;
};



function getTotalPrice() {
  return items.reduce((sum, item) => (sum + item.totalPrice), 0);
}


  return (
    <AppContext.Provider value={{increment, setIncrement, items, setItems, getItemsCount, addItemToCart, getTotalPrice, location, setLocation, myAddress, setMyAddress}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};