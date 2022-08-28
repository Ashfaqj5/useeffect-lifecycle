import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [roll,setroll]=useState(1);
  useEffect(()=>{
    console.log("function in useeffect executed");
    return ()=>{
      console.log("return function in useeffect executed");
    }
  },[roll]);

  function onClickHandler(){
    setroll(roll+1);
  }
  return (
    <div className="App">
      <p>{roll}</p>
      <button onClick={onClickHandler}>click to change roll</button>
      {console.log("rendered")}
    </div>
  );
}

export default App;
