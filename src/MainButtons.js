import "./MainButtons.css"
function MainButtons(){
    return(
        <div className="TicketMainButtonContainer">
           <button className="SaveTicketButton">GUARDAR</button>
           <button className="ShareTicketButton">COMPARTIR</button>
           <button className="EreaseTicketButton">BORRAR</button>
           <button className="ExitTicketButton">SALIR</button>
        </div>
    )
}

export default MainButtons