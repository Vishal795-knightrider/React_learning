import './App.css'
import Card from './Components/Card'

function App() {


  return (
    <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Css</h1>
    <Card username="Abhishek" btnText="Click me"/>
    <Card username="Vishal"/>
    </>
  )
}

export default App