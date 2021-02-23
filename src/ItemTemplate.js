import "./ItemTemplate.css"
import { useSelector, useDispatch } from 'react-redux'
import { activateDeButtons, selectItem, disableHiding } from './actions'
function ItemTemplate(){
    const allItems = useSelector(state=>state.itemReducer)
    const hideItem = useSelector(state=>state.itemHided)
    const items = allItems.filter((i) => i.key !== hideItem)
    const itemSelected = useSelector(state => state.itemSelectionReducer)
    const dispatch = useDispatch()
    function handleItemClick(key) {
        dispatch(activateDeButtons(),
        dispatch(selectItem(key)),
        dispatch(disableHiding()))
    }
    return(<div>

        { items.map(i=>i.key === itemSelected ?
        (
        <div className="MainItemTemplateContainer" key ={i.key}>
            <div className="ItemTemplateContainerSelected" onClick={()=>handleItemClick(i.key)}>
                <div className="ItemTemplateDescription" >{i.description}</div>
                <div className="ItemTemplateSplit" ></div>
                <div className="ItemTemplateAmount">{i.amounth}</div>
            </div>
        </div>
        ):

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