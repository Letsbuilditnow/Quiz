import Buttons from "./Buttons";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Questions(props) {
  const [options, setOptions] = React.useState([]);
     let arrayss = props.options.split(",");


     useEffect(() => {
    const newOptions = arrayss.map((item) => {
      return { data: item, isHold: true, id: uuidv4() };
    });
    setOptions(newOptions);
  }, []);

  // setOptions(arrayss)
  // function call for changing the value of isHold and hence change the colour of the button
  function call(id) {
    setOptions((prvOptions) => {
      return prvOptions.map((item) => {
        console.log(item.isHold)
        return item.id == id ? { ...item, isHold: !item.isHold } : item;
      });
    });
  }

  let buttonElements = options.map((a, index) => {
    return <Buttons options={a.data} id={a.id} isHold={a.isHold} call={call} />;
  });
  return (
    <>
      <div className="section-questions">
        <div className="section-question">
          <h4>{props.question}</h4>
        </div>
        <div className="section-buttons">{buttonElements}</div>
        <br />
      </div>
    </>
  );
}

export default Questions;
