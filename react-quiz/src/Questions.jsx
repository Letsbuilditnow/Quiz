import Buttons from "./Buttons";
import React from "react";

function Questions() {
 let arr=[1,2,3,4]
  let buttonElements=arr.map(a=><Buttons/>)
  return (
    <>
     
            <div className="section-questions">
              <div className="section-question">
                <h4>choose a number</h4>
              </div>
              <div className="section-buttons">
              {buttonElements}
              </div>
            </div>

    </>
  );
}

export default Questions;
