import "./DeleteEditeButtons.css"
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from './actions'
function DeleteEditeButtons (){
    const showButtons = useSelector(state=>state.deleteEditButtonsReducer)
    const currentKey = useSelector(state=>state.itemSelectionReducer)
    const dispatch = useDispatch()
    const handleDelete = (key) =>{
        dispatch(deleteItem(key))
    }
    return(
    <div>
        {showButtons ?
        <div className="DeleteButtonContainer">
            <button className="DeleteButton" onClick={()=>{handleDelete(currentKey)}}>DELETE</button>
        </div>
        :""}
    </div>
    );
}

export default DeleteEditeButtons