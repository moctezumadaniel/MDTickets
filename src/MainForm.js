import "./MainForm.css"
function MainForm (){
    return(
        <div className="MainFormComponentContainer">
            <div className="MainFormContainer">
                <textarea className="MainFormDescriptionArea"/>
                <div className="MainFormSplit"></div>
                <input type="number" className="MainFormAmounthArea"/>
            </div>
        </div>

    );
}

export default MainForm