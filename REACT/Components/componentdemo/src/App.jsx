import Chennai from "./component/Chennai"
import Karanataka from "./component/Karanataka"
import Kerala from "./component/Kerala"
import '../src/App.css'


const App =()=>{
  return(
    <>
    <div>
      <div className="navbar">
        <a href="">CHENNAI</a>
        <a href="">KERALA</a>
        <a href="">KARNATAKA</a>
      </div>
      <h1 style={{backgroundColor:"black", color:"white",padding:"20px",textAlign:"center",marginBottom:"10px"}}>WELCOME TO CHENNAI</h1>
      <Chennai/>
      <Kerala/>
      <Karanataka/>
    </div>
    </>
  )
}
export default App
