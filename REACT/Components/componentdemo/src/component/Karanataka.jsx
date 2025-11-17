import Cinema from "./Cinema"
import Traditional from "./Traditional"

const Karanataka = ()=>{
    return(
        <>
        <div>
            <h1 style={{backgroundColor:"black", color:"white",padding:"20px",textAlign:"center"}}>WELCOME TO KARNATAKA</h1>
        </div>
        <img src="./Bangalore.jpg" alt="Bamgalore" />
        <Cinema/>
        <Traditional/>
        </>
    )
}
export default Karanataka