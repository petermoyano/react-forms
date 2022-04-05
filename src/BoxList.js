import React from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    return <>
    <h1>This is my h1</h1>
    <Box width={`100`} height={`100`} backgroundColor="blue"/>
    <NewBoxForm />
    </>
}

export default BoxList;