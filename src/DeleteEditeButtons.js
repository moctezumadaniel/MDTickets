import "./DeleteEditeButtons.css"
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, deactivateDeButtons } from './actions'
function DeleteEditeButtons (){
    const showButtons = useSelector(state=>state.deleteEditButtonsReducer)
    const currentKey = useSelector(state=>state.itemSelectionReducer)
    const dispatch = useDispatch()
    const handleDelete = (key) =>{
        dispatch(deleteItem(key),
        dispatch(deactivateDeButtons()))
    }
    return(
    <div>
        {showButtons ?
        <div className="DeleteEditeButtonsContainer">
            <button className="EditeButton">EDIT</button>
            <button className="DeleteButton" onClick={()=>{handleDelete(currentKey)}}>DELETE</button>
        </div>
        :""}
    </div>
    );
}

export default DeleteEditeButtons