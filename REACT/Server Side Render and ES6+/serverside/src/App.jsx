import { Link, Route,BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./components/Home"
import Character from "./components/Character"
import Plot from "./components/Plot"
import Info from "./components/Info"
import './App.css'

const App =()=>{
  return(
    <>
    <Router>
      <div className="navbar">
        <div className="logo">
          <h1>MASTER</h1>
        </div>
        <div className="nav">
          <Link className="link" to='/'>HOME</Link>
          <Link className='link'to='/character'>CHARACTER SKETCH</Link>
          <Link className="link"to='/plot'>PLOT</Link>
          <Link className="link"to='/info'>MORE INFO</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/character" element={<Character/>}/>
        <Route path="/plot" element={<Plot/>}/>
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </Router>
    </>
  )
}
export default App
