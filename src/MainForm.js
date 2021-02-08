function MainForm (){
    return(
        <div className="MainFormComponentContainer">
            <form>
                <label className="MainFormDesciptionContainer">
                    NUEVA DESCRIPCION
                    <textarea className="MainFormDescriptionArea"placeholder ="Escribe la descripcion del concepto"type="text" name="newDescription"/>
                </label>
                <label className="MainFormAmounthContainer">
                    NUEVO MONTO
                    <textarea className="MainFormAmounthArea" placeholder ="Escribe el monto del concepto"type="text" name="newAmount"/>
                </label>
            </form>
            <button>AGREGAR</button>
            <button>COMPARTIR</button>
        </div>

    );
}

export default MainForm