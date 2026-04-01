import {useState,useCallback} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numAllow,setNumAllow]=useState(false)
  const [charAllow,setCharAllow]=useState(false)
  const [pass,setPass]=useState("")   //yaha par hm kuch "jhshj" is tarah ka daal bhi skte hai pr hm yaha pr generate krenge password

   const passwordGenerator=useCallback(()=>{
    let pass="" 
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str+="0123456789"
    if(charAllow)  str+="!@#$%^&*(){}[]_+"

    for(let i=1;i<=array.length();i++){
      let char=Math.floor(Math.random()*str.length+1)
    }
    pass=str.charAt(char)
   },[length,numAllow,charAllow,setPass])

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Manager</h1>
    </>
  ) 
} 

export default App
