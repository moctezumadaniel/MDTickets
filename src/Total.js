import "./Total.css"
import { useSelector } from 'react-redux'

function Total (){
    const grandTotal = useSelector(state => state.grandTotalReducer)
    return(
        <div className="ContainerTotalComponent">
            <div className="ContainerTotal">
                <div className="TicketTotalDescription">Total</div>
                <div className="TicketTotalAmount">{grandTotal}</div>
            </div>
        </div>
    );
}

export default Total