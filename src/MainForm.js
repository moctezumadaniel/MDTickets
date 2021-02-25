import "./MainForm.css"
import { useSelector, useDispatch } from 'react-redux';
import { changeDescription, changeAmounth, deactivateEditing, resetItemSelection, deactivateDeButtons } from './actions'

function MainForm (){
    const description = useSelector(state => state.descriptionReducer)
    const amounth = useSelector(state => state.amounthReducer)
    const dispatch = useDispatch()

    const handleDescriptionChange = event=>{
        dispatch(changeDescription(event.target.value));
    }
    
    const handleAmounthChange = event =>{
        dispatch(changeAmounth(event.target.value));
    }

    const handleMainFormClick = ()=>{
        dispatch(deactivateEditing(),
        dispatch(resetItemSelection(),
        dispatch(deactivateDeButtons())))
    }
    return(
        <div className="MainFormComponentContainer">
            <div className="MainFormContainer"
            onClick={handleMainFormClick}>

                <textarea className="MainFormDescriptionArea" 
                onChange={handleDescriptionChange}
                value={description}/>

                <div className="MainFormSplit"></div>

                <input type="number" className="MainFormAmounthArea"
                onChange={handleAmounthChange} 
                value={amounth}/>

            </div>
        </div>

    );
}

export default MainForm