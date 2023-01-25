import Buttons from "./Buttons";
import React, { useEffect } from "react";

function Questions(props) {
const [options,setOptions]=React.useState([])
let arrayss=props.options.split(',')
useEffect(()=>{
  setOptions(arrayss)
},[])
// setOptions(arrayss)
let arr=[1,2,3,4]
console.log(arr);
console.log(arrayss)

  let buttonElements=options.map(a=>{
 return <Buttons options={a} />})
  return (
    <>
     
            <div className="section-questions">
              <div className="section-question">
                <h4>{props.question}</h4>
              </div>
              <div className="section-buttons">
              {buttonElements}
              </div>
            </div>

    </>
  );
}

export default Questions;
