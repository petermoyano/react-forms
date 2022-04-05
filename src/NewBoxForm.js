import React, { useState } from "react";

function NewBoxForm() {
    /*     const [width, setWidth] =  useState(100);
        const [height, setHeight] =  useState(100);
        const [backgroundColor, setBackgroundColor] =  useState('red'); */
    const initialState = { width: 100, height: 100, backgroundColor: "#000000" };
    const [formData, setFormData] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({ ...fData, [name]: value }))
        console.log(formData);
    }

    return <>
        <form>
            <label htmlFor="width">width</label>
            <input id="width" type="text" name="width" value={formData.width} onChange={handleChange} />
            <label htmlFor="height">height</label>
            <input id="height" type="text" name="height" value={formData.height} onChange={handleChange} />
            <label htmlFor="backgroundColor">background color</label>
            <input id="backgroundColor" type="color" name="backgroundColor" value={formData.backgroundColor} onChange={handleChange} />
            <button type="submit">submit</button>
        </form>
    </>
}

export default NewBoxForm;