import { Routes } from "react-router-dom"
import Banner from "./components/Banner"
import Character from "./components/Character"
import Multiplay from "./components/Multiply"
import Navbar from "./components/Navbar"
import Plot from "./components/Plot"
import Title from "./components/Title"

const App =()=>{
  return(
    <>
    <Title/>
    <Banner/>
    <Character/>
    <Plot/>
    <Multiplay/>
      
       
    
    </>
  )
}
export default App