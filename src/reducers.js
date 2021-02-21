import { combineReducers } from "redux";

const itemReducer = (state = [], action)=>{
    switch(action.type){
        case"NEW_ITEM":
            return [...state,
                {
                    key:action.conceptNumber,
                    description:action.description,
                    amounth:action.amounth
                }
            ];
        default:
            return state;
    }
}

const descriptionReducer = (state = "", action) =>{
    switch(action.type){
        case "CHANGE_DESCRIPTION":
            return action.payload;
        case "RESET_DESCRIPTION":
            return "";
        default:
            return state
    }
}

const amounthReducer = (state="", action)=>{
    switch(action.type){
        case "CHANGE_AMOUNTH":
            return action.payload;
        case "RESET_AMOUNTH":
            return "";
        default:
            return state;
    }
}

const addButtonReducer = (state = false, action)=>{
    switch(action.type){
        case "ACTIVATE_BUTTON":
            return true;
        case "DEACTIVATE_BUTTON":
            return false;
        default:
            return state;
    }
}

const grandTotalReducer = (state = 0, action)=>{
    if( action.type === "ADD_AMOUNTH_TO_GT" && action.newAmounth){
        return state + action.newAmounth
    }else return state
}

const numberOfConceptsReducer = (state = 1, action)=>{
    switch(action.type){
        case "INCREMENT_NUMBER_OF_CONCEPTS":
            return state + 1;
        default:
            return state;
    }
}

const deleteEditButtonsReducer = (state = false, action)=>{
    switch(action.type){
        case "ACTIVATE_DE_BUTTONS":
            return true;
        case "DEACTIVATE_DE_BUTTONS":
            return false;
        default:
            return state;
    }
}

const itemSelectionReducer = (state = "", action)=>{
    switch(action.type){
        case "ITEM_SELECTED":
            return action.key;
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    itemReducer,
    descriptionReducer,
    amounthReducer,
    addButtonReducer,
    grandTotalReducer,
    numberOfConceptsReducer,
    deleteEditButtonsReducer,
    itemSelectionReducer,

})

export default rootReducers