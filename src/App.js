import logo from './logo.svg';
import React,{useState} from "react"
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  
  const handleIncrement = ()=>{
        setCount(count+1)
  }

  const handleDecrement = ()=>{
    setCount(count-1)
  }

  return (
    <div className="App">
      <h1>
        <button className='button' onClick={handleIncrement}>+</button>
          <span>{count}</span>
        <button className='button' onClick={handleDecrement}>-</button>
      </h1>
    </div>
  );
}

export default App;
