import React from "react";

function Buttons(props) {
const style={
  backgroundColor:props.isHold?"white":"red",
}
  return (
    <>
      
      <button style={style}onClick={()=>props.call(props.id)} >{props.options}</button>
          
      
    </>
  );
}

export default Buttons;
