import './AddButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addConcept } from './actions'


function AddButton (){
    const description = useSelector(state=>state.descriptionReducer);
    const amounth = useSelector(state=>state.amounthReducer)
    const stateButton = useSelector(state=>state.addButtonReducer)
    const dispatch = useDispatch()
    const handleAddItem = (description, amounth)=>{
        dispatch(addConcept(description,amounth))
    }
    

    return(
        <div className="AddButtonContainer">
            {stateButton ?
                <button className="AddButton"
                onClick={()=>handleAddItem(description,amounth)}>ADD</button>
            :""}
        </div>
    )
    
}

export default AddButton;