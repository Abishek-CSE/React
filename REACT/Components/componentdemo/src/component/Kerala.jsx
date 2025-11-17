import Tourism from "./Tourism"

const Kerala =()=>{
    return(
        <>
        <div>
            <h1 style={{backgroundColor:"black", color:"white",padding:"20px",textAlign:"center"}}>WELCOME TO KERALA</h1>
        </div>
        <img src="./Kerala.jpg" alt="Kerala" />
        <Festival/>
        <Tourism/>
        </>
    )
}
export default Kerala

export const Festival = ()=>{
    return(
        <>
        <div>
            <h2 style={{backgroundColor:"green", color:"white",padding:"20px",textAlign:"center"}}>Festival</h2>
            <h3>Kerala is known for its vibrant and colorful festivals, which reflect the state's rich culture, traditions, and harmony. Onam is the biggest festival, celebrated with floral carpets, boat races, traditional games, and the famous Onam Sadya feast. Vishu marks the Malayali New Year and is known for the Vishukkani ritual and fireworks. Thrissur Pooram is another major festival, famous for its decorated elephants, percussion music, and grand fireworks. Other important celebrations include Eid, Christmas, and temple festivals across the state. Kerala’s festivals bring together art, music, dance, and community, making them lively and memorable events.</h3>
        </div>
        </>
    )
}