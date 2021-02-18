import './AddButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addConcept, resetAmounth, resetDescription, addAmounthToGrandTotal } from './actions'


function AddButton (){
    const description = useSelector(state=>state.descriptionReducer);
    const amounth = useSelector(state=>state.amounthReducer)
    const conceptNumber = useSelector(state =>state.numberOfConceptsReducer)
    const dispatch = useDispatch()
    
    function handleAddItem  (description, amounth){
        dispatch(addConcept(description,amounth),
        dispatch(addAmounthToGrandTotal(parseFloat(amounth),
        dispatch(resetAmounth()),
        dispatch(resetDescription())
        )));
        
    }
    

    return(
        <div className="AddButtonContainer">
            {description.length > 0 || amounth > 0 ?
                <button className="AddButton"
                onClick={()=>handleAddItem(description,amounth)}>ADD</button>
            :""}
        </div>
    )
    
}

export default AddButton;