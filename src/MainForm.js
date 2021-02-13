import "./MainForm.css"
import React, { useState } from 'react';

function MainForm (){
    const [description,setDescription] = useState("")
    const [amounth,setAmounth] = useState(0)
    const handleDescriptionChange = event=>{
        setDescription(event.target.value);
    }
    const handleAmounthChange = event =>{
        setAmounth(event.target.value);
    }
    return(
        <div className="MainFormComponentContainer">
            <div className="MainFormContainer">
                <textarea className="MainFormDescriptionArea" onChange={handleDescriptionChange} value={description}/>
                <div className="MainFormSplit"></div>
                <input type="number" className="MainFormAmounthArea" onChange={handleAmounthChange} value={amounth}/>
            </div>
        </div>

    );
}

export default MainForm