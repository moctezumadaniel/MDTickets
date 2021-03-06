import './AddButton.css'
import { useSelector, useDispatch } from 'react-redux'
import { addConcept, resetAmounth, resetDescription, incrementNumberOfConcepts } from './actions'


function AddButton (){
    const description = useSelector(state=>state.descriptionReducer);
    const amounth = useSelector(state=>state.amounthReducer)
    const conceptNumber = useSelector(state =>state.numberOfConceptsReducer)
    const editStatus = useSelector(state=>state.editItemStatus)
    const dispatch = useDispatch()
    
    function handleAddItem  (conceptNumber,description, amounth){
        dispatch(addConcept(conceptNumber,description,amounth),
        dispatch(resetAmounth()),
        dispatch(resetDescription(),
        dispatch(incrementNumberOfConcepts())
        ));
        
    }
    

    return(
        <div className="AddButtonContainer">
            {(description.length > 0 || amounth > 0) && (editStatus===false)?
                <button className="AddButton"
                onClick={()=>handleAddItem(conceptNumber,description,amounth)}>AGREGAR</button>
            :""}
        </div>
    )
    
}

export default AddButton;