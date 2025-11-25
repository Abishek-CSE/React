import Child from "./components/Child"

const App = () => {
  const stringdata = "Welcome to Reality mamey"
  const numberdata = 20
  const objectdata ={Name:"Abishek",age:24}
  const arraydata =[1,2,3,4,5]
  const userdetails =[{Name:"AK",age:44},{Name:"STR",age:40}]


  return (
    <>
      <div>
        <h1>The String: {stringdata}</h1>
        <h1>The Number: {numberdata}</h1>
        <h1>The Object Name: {objectdata.Name}</h1>
        <h1>The object Age :{objectdata.age}</h1>
        <h1>The Array Data:{arraydata.join(",")}</h1>
        { userdetails.map((e, i) => (
            <div key={i}>
              <h2> Array of Object Name: {e.Name}</h2>
              <h2>Array of Object Age : {e.age}</h2>
            </div>
          ))}

      </div>
      <Child text={stringdata} integer={numberdata} thing={objectdata} datas={arraydata} details={userdetails} />
    </>
  )
}

export default App

