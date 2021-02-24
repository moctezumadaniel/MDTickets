import './ConfirmEdit.css'
import { useSelector } from 'react-redux'


function ConfirmEditing (){
    const editStatus = useSelector(state=>state.rootReducers)
    return(
        <div>
            {editStatus ?
            <div>
            <button>CONFIRM</button>
            </div>
            :""}
            
        </div>
    );
}

export default ConfirmEditing