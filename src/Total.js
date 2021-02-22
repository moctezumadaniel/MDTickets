import "./Total.css"
import { useSelector } from 'react-redux'

function Total (){
    const currentItems = useSelector(state => state.itemReducer)
    const itemsAmounths = currentItems.filter(i=>i.amounth !== "")
    const grandTotal = itemsAmounths.reduce((accumulator, currentItem)=>accumulator + parseFloat(currentItem.amounth),0)
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