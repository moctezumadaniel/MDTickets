import "./DeleteEditeButtons.css"
import { useSelector } from 'react-redux'
function DeleteEditeButtons (){
    const showButtons = useSelector(state=>state.deleteEditButtonsReducer)
    return(
    <div>
        {showButtons ?
        <div className="DeleteButtonContainer">
            <button className="DeleteButton">DELETE</button>
        </div>
        :""}
    </div>
    );
}

export default DeleteEditeButtons