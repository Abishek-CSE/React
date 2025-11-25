import { useEffect, useState } from "react"
import Title from "./components/Title";
const App = () => {
  useEffect(()=>{
    console.log("Screen Rendering");
    setTimeout(() => {
      numberchange()
    },1000);
    
})
  const [number_data, setNumber_data]=useState(0)
  const numberchange =()=>{
    setNumber_data(number_data+1)
  }
  return (
    <>
    <div>
      <h1> I will Count the number {number_data}</h1>
      <button onClick={numberchange}>Click me </button>
    </div>
    <Title/>
    </>
  )
}
export default App