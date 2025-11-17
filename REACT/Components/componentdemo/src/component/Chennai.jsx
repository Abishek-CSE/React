import It_Company from "./It_Compnay"
import Robotic from "./Robotic"

const Chennai = ()=>{
    return(
        <>
        <div>
            <h1 style={{backgroundColor:"black", color:"white",padding:"20px",textAlign:"center"}}>WELCOME TO CHENNAI</h1>
            <img  className="ChennaiImage" src="./Chennai.jpg" alt="Chennai" />
            <It_Company/>
            <Robotic/>
        </div>
        </>
    )
}
export default Chennai