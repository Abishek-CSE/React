import { useState } from "react"
import image1 from '../public/1.jpg'
import image2 from '../public/2.jpg'

const App = () => {
  const[shapechange, setShapechange]= useState(0)
  const shape =()=>{
    setShapechange((shapechange +1)% 3)
  }
  const [imagechange,setImagechange]=useState(false)
  const imagespot =()=>{
    setImagechange(!imagechange)
  }
  const [series,setSeries]=useState([0,1])
  const  serieschange =()=>{
    const first = series[series.length -1]
    const second =series[series.length -2]
    const final = first + second
    setSeries([...series,final])
  }
  return (
    <>
    <div>
      <button onClick={shape}>Change</button>
      { shapechange == 1 &&
        <div style={{width:"100px",height:"100px",backgroundColor:"yellow",borderRadius:"50%"}}></div>
      }
      { shapechange == 2 &&
        <div style={{width:"300px",height:"100px",backgroundColor:"blue"}}></div>
      }
      { shapechange == 0 &&
        <div style={{width:"100px",height:"100px",backgroundColor:"red"}}></div>
      }
    </div>
    <div>
      <button onClick={imagespot}>images size</button>
      {imagechange ? 
        <img src={image1} alt="" width="100px" height="100px" />
 : <img src={image2} alt="" width="100px" height="100px" />  }
    </div>
    <div>
      <h1>{series.join(',')}</h1>
      <button onClick={serieschange}>SERIES</button>
    </div>
    </>
  )
}

export default App