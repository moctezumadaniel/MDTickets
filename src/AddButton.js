import './AddButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addConcept } from './actions'


function AddButton (){
    const description = useSelector(state=>state.descriptionReducer);
    const amounth = useSelector(state=>state.amounthReducer)
    const dispatch = useDispatch()
    const handleAddItem = (description, amounth)=>{
        dispatch(addConcept(description,amounth))
    }
    

    return(
        <div className="AddButtonContainer">

            <button className="AddButton"
            onClick={()=>handleAddItem(description,amounth)}>ADD</button>

        </div>
    )
    
}

export default AddButton;