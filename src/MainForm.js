import "./MainForm.css"
import { useSelector, useDispatch } from 'react-redux';
import { changeDescription, changeAmounth } from './actions'

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
    return(
        <div className="MainFormComponentContainer">
            <div className="MainFormContainer">

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