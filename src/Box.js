import React from "react";


function Box({width, height, backgroundColor}) {
    return (
        <div style={{
            height: `${height}px`,
            width: `${width}px`,
            backgroundColor
          }}></div>
    )
}
export default Box; 