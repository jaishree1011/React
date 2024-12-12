import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import BasicSwitches from './New';

function App() {
  const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      } else {

      }
    };
    const menu = [{
      name: "Briyani", price: 150},
      {name: "Dosa", price: 50},
      {name: "Pizza", price: 110},
      {name: "Naan", price: 120},
      {name: "panner", price: 10},
      {name: "Burger", price: 750
    }]
    const filtered_menu = menu.filter(result => result.price>100)
    console.log(filtered_menu)
    const total = menu.reduce((acc,current) => acc+current.price,0)
    console.log("total=====",total);
    
    return (
      <div className="App">
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        {
          menu?.map((data) =>{
            return(
              <>
                <p>name: {data?.name}</p>
                <p style={{color:'blue'}}>price: {data.price}</p>
              </>
            )
          })
        }  
        {
          
        }    
      </div>
    );
  }
  return (
    <div>
      <Counter />
      <BasicSwitches />
    </div>
  );
}

export default App
