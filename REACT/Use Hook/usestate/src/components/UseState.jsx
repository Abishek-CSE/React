import { useState } from "react"

const UseState = () => {
     const[number1, setNumber] = useState(0)
     const[number2, setNumber1] =useState(0)
     const [number3, setNumber2] =useState(0)
     const [number4, setNumber3] =useState(0)
    const numberstate =()=>{
        setNumber(number1 +1)
        setNumber1(number2+2)
        setNumber2(number3 +3)
        setNumber3(number4+4)
    }
    const[string,setString] =useState("AK")
    const[string1, setString1] =useState("VJ")
    const[string2,setString2] =useState("STR")
    const[string3,setString3]=useState("D")
    const[string4,setString4]=useState("PR")
    const[string5,setString5]=useState("VJS")
    const stringstate =()=>{
        setString("AjithKumar")
        setString1("Vijay")
        setString2("Silambarasan")
        setString3("Dhanush")
        setString4("Pradeep Ranganathan")
        setString5("Vijay Sethupathi")

    }
    const[array1, setArray ]= useState([1,2,3,4,5])
     const[array2, setArray1] =useState([6,7,8,9,0])
     const [array3, setArray2] =useState([10,11,12,13,14])
     const [array4, setArray3] =useState([15,16,17,18,19])
     const arraystate =()=>{
        setArray([...array2,])
        setArray1([0,9,8,7,6])
        setArray2([...array1,786])
        setArray3([19,18,17,16,15])
    }
    const[boolean1,setBoolean]=useState(true)
    const[boolean2,setBoolean2]=useState(false)
    const booleanstate=()=>{
      setBoolean(false)
      setBoolean2(true)
    }
  return (
    <>
    <h1>NUMBER {number1}</h1>
    <h1>SECOND NUMBER {number2}</h1>
    <h1>THIRD NUMBER {number3}</h1>
    <h1>FOURTH NUMBER {number4}</h1>
    <button onClick={numberstate}>Click Me I Will Change the number</button>
    <h1>STRING 1 = {string}</h1>
    <h1>STRING 2 = {string1}</h1>
    <h1>STRING 3 = {string2}</h1>
    <h1>STRING 4 ={string3}</h1>
    <h1>STRING 5 ={string4}</h1>
    <h1>STRING 6 = {string5}</h1>
    <button onClick={stringstate}>CLICK ME I will change the string</button>
     <h1>ARRAY ={array1}</h1>
    <h1>SECOND ARRAY = {array2}</h1>
    <h1>THIRD ARRAY ={array3}</h1>
    <h1>FOURTH ARRAY=
        {array4}</h1>
    <button onClick={arraystate}>Click Me I Will Change the Array</button>
    <h1>BOOLEAN 1 = {boolean1 ? "TRUE":"FALSE"}</h1>
    <h1>BOOLEAN 2 ={boolean2 ?"TRUE":"FALSE"}</h1>
    <button onClick={booleanstate}>Click me i will Change the boolean</button>
    </>
  )
}
export default UseState
