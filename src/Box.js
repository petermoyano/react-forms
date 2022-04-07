import React from "react";
import './Box.css';

function Box({removeBox, width, height, backgroundColor, id}) {
    const boxClicked = (e) => {
        removeBox(e.target.id)
    }

    return (
        <div 
            className="box" 
            style={{
                height: `${height}px`,
                width: `${width}px`,
                backgroundColor,
                display: "inline-block",
            }} 
            onClick={boxClicked}
            id={id}>
            </div>
    )
}
export default Box; 