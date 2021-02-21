import "./ItemTemplate.css"
import { useSelector, useDispatch } from 'react-redux'
import { activateDeButtons, selectItem } from './actions'
function ItemTemplate(){
    const items = useSelector(state=>state.itemReducer)
    const dispatch = useDispatch()
    function handleItemClick(key) {
        dispatch(activateDeButtons(),
        dispatch(selectItem(key)))
    }
    return(<div>

        { items.map(i=>
        (
        <div className="MainItemTemplateContainer" key ={i.key}>
            <div className="ItemTemplateContainer" onClick={()=>handleItemClick(i.key)}>
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