import It_Company from "./It_Compnay"
import Robotic from "./Robotic"

const Chennai = ()=>{
    return(
        <>
        <div>
            <h1 style={{textAlign:"center", backgroundColor:"black", color:"white"}}>WELCOME TO CHENNAI</h1>
            <img  className="ChennaiImage" src="./Chennai.jpg" alt="Chennai" />
            <It_Company/>
            <Robotic/>
        </div>
        </>
    )
}
export default Chennai