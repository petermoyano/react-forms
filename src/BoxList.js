import React, {useState} from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid';

function BoxList() {
    const INITIAL_BOXES = []
    const [boxes, setBoxes] = useState(INITIAL_BOXES);
    // we want to pass down a function that updates the state of boxes, basically adding another box, 
    // taking data from a form down below, in a child component
    const addBox = (width, height, backgroundColor) => {
        setBoxes(boxes => [...boxes, {width, height, backgroundColor, key:uuid(), id:uuid()}]);
        console.log(boxes);
    }
    // delete a box from boxes
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(function (b) {return b.id != id}));
    }
    return <>
    {boxes.map(b => <Box removeBox={removeBox} id={b.id} key={b.key} width={b.width} height={b.height} backgroundColor={b.backgroundColor}/> )}
    <NewBoxForm addBox={addBox}/>
    </>
}

export default BoxList;