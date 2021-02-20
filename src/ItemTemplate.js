import "./ItemTemplate.css"
import { useSelector, useDispatch } from 'react-redux'
import { activateDeButtons } from './actions'
function ItemTemplate(){
    const items = useSelector(state=>state.itemReducer)
    const dispatch = useDispatch()
    function handleItemClick() {
        dispatch(activateDeButtons())
    }
    return(<div>

        { items.map(i=>
        (
        <div className="MainItemTemplateContainer" key ={i.key}>
            <div className="ItemTemplateContainer" onClick={handleItemClick}>
                <div className="ItemTemplateDescription" >{i.description}</div>
                <div className="ItemTemplateSplit" ></div>
                <div className="ItemTemplateAmount">{i.amounth}</div>
            </div>
        </div>
        ))}
        </div>
    );
}

export default ItemTemplate