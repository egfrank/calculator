import React from 'react';
import './App.css';

function Button( {name} ) {
  return <div>{name}</div>
}

function NumberButton({value}){
  return <Button value={value} name={value.toString()} />
}

function Decimal( {} ){
  
}


function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
