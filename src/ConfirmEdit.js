import './ConfirmEdit.css'
import { useSelector } from 'react-redux'


function ConfirmEditing (){
    const editStatus = useSelector(state=>state.editItemStatus)
    return(
        <div>
            {editStatus ?
            <div className="ConfirmEditButtonContainer">
            <button className="ConfirmEditButton">CONFIRM</button>
            </div>
            :""}
            
        </div>
    );
}

export default ConfirmEditing