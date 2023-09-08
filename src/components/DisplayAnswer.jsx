import "../styles/displayanswer.css";
import { useState } from "react";

export default function DisplayAnswer({ displayValue }) {
  return (
    <>
      <div className="display-area">
        <span>
          {displayValue.map((elem, index) => {
            return <span key={index}>{elem.elem}</span>;
          })}
        </span>
      </div>
    </>
  );
}
