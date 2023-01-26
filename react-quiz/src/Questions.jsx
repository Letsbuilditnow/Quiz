import Buttons from "./Buttons";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";



function Questions(props) {
  const [options, setOptions] = React.useState([]);
  let arrayss = props.options.split(",");
  useEffect(() => {
    setOptions(arrayss);
  }, []);
  // setOptions(arrayss)

  let buttonElements = options.map((a, index) => {
    return <Buttons options={a}  id={uuidv4()} isHold={props.isHold} call={props.call} />;
  });
  return (
    <>
      <div className="section-questions">
        <div className="section-question">
          <h4>{props.question}</h4>
        </div>
        <div className="section-buttons">{buttonElements}</div>
      </div>
    </>
  );
}

export default Questions;
