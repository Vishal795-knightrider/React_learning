import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter]=useState(5)

  //let val=5  yeh counter update to hoga pr ui pr show nhi hoga

  const AddVal=()=>setCounter(counter+1)
  
  const RemVal=()=>{
    
    if(counter<=0) {alert("cannot go beyond"); return;}
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Hey this is Vishal</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={AddVal}>Add Val</button>
    <button onClick={RemVal}>Remove Val</button>
    </>
  )
}

export default App
