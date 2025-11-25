import { useEffect, useState } from "react";

const Title = () => {
  const [data, setData] = useState(0);
  const numberchnage = () => {
    setData(prevData => prevData + 1);
  };
  useEffect(() => {
    console.log("Rendering");
    setInterval(() => {
      numberchnage();
    }, 1000);
  }, []); 

  return (
    <div>
      <h1>The Number will increase {data}</h1>
      <button onClick={numberchnage}>Click me</button>
    </div>
  );
};

export default Title;
