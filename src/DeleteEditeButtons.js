import "./DeleteEditeButtons.css"
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, deactivateDeButtons, hideItem, changeDescription, changeAmounth, activateEditing } from './actions'
function DeleteEditeButtons (){
    const showButtons = useSelector(state=>state.deleteEditButtonsReducer)
    const currentKey = useSelector(state=>state.itemSelectionReducer)
    const allItems = useSelector(state=>state.itemReducer)
    const editStatus = useSelector(state=>state.editItemStatus)
    const dispatch = useDispatch()
    const handleDelete = (key) =>{
        dispatch(deleteItem(key),
        dispatch(deactivateDeButtons()))
    }
    const handleEdit = (key)=>{
        let item = allItems.filter((i)=>i.key===currentKey)
        let description = item[0].description
        let amounth = item[0].amounth

        dispatch(hideItem(key),
        dispatch(deactivateDeButtons()),
        dispatch(changeDescription(description)),
        dispatch(changeAmounth(amounth)),
        dispatch(activateEditing()))
    }
    return(
    <div>
        {showButtons && !editStatus ?
        <div className="DeleteEditeButtonsContainer">
            <button className="EditeButton" onClick={()=>{handleEdit(currentKey)}}>EDITAR</button>
            <button className="DeleteButton" onClick={()=>{handleDelete(currentKey)}}>BORRAR</button>
        </div>
        :""}
    </div>
    );
}

export default DeleteEditeButtons