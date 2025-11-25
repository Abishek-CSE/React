import Demochild from "./Demochild"

const Child = (props) => {
  const username = "AJITH KUMAR"
  return (
    <>
      <div>
        <h2>Child String: {props.text}</h2>
        <h2>Child Number: {props.integer}</h2>
        <h2>Child Object Name: {props.thing.Name}</h2>
        <h2>Child Object Age: {props.thing.age}</h2>
        <h2>Child Array :{props.datas.join(",")}</h2>
        {props.details.map((e, i) => (
          <div key={i}>
            <h3>Name: {e.Name}</h3>
            <h3>Age: {e.age}</h3>
          </div>
        ))}
      </div>
      <Demochild user ={username} />
    </>
  )
}

export default Child
