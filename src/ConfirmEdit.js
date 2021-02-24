import './ConfirmEdit.css'
import { useSelector, useDispatch } from 'react-redux'
import { configureItem, deactivateEditing, disableHiding, resetDescription, resetAmounth, resetItemSelection } from './actions'

function ConfirmEditing (){
    const editStatus = useSelector(state=>state.editItemStatus)
    const dispatch = useDispatch()
    const editDescription = useSelector(state=>state.descriptionReducer)
    const editAmounth = useSelector(state=>state.amounthReducer)
    const editingKey = useSelector(state=>state.itemSelectionReducer)

    const handleConfirmEdition = ()=>{
        dispatch(configureItem(editingKey,editDescription,editAmounth),
        dispatch(deactivateEditing(),
        dispatch(disableHiding(),
        dispatch(resetDescription(),
        dispatch(resetAmounth(),
        dispatch(resetItemSelection()))))))
    }

    return(
        <div>
            {editStatus ?
            <div className="ConfirmEditButtonContainer">
            <button className="ConfirmEditButton" onClick={handleConfirmEdition}>CONFIRM</button>
            </div>
            :""}
            
        </div>
    );
}

export default ConfirmEditing