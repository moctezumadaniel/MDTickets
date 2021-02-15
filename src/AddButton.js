import './AddButton.css'
import { newItem } from './actions'
import { useSelector, useDispatch } from 'react-redux';

function AddButton (){
    const description = useSelector(state => state.descriptionReducer)
    const amounth = useSelector(state => state.amounthReducer)
    const dispatch = useDispatch();
    const handleAddPress = (newDescription, newAmounth) =>{
        dispatch(newItem(newDescription, newAmounth));
    }

    return(
        <div className="AddButtonContainer">

            <button className="AddButton" 
            onClick={handleAddPress(description,amounth)}>ADD</button>

        </div>
    )
    
}

export default AddButton;