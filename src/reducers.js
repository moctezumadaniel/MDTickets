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
        case "DELETE_ITEM":
            return state.filter(i=>i.key !== action.key);
        case "CONFIGURE_ITEM":
            return [...state].map(
                function(i) {
                    if(i.key === action.key){
                        return {key:i.key,
                        description:action.description,
                        amounth:action.amounth}
                    }else return i
                }
            )
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
        case "RESET_ITEM_SELECTION":
            return ""
        default:
            return state;
    }
}

const itemHided = (state = "", action)=>{
    switch(action.type){
        case "HIDE_ITEM":
            return action.key;
        case "DISABLE_HIDING":
            return "";
        default:
            return state;

    }
}

const editItemStatus = (state = false, action)=>{
    switch(action.type){
        case "ACTIVATE_EDITING":
            return true;
        case "DEACTIVATE_EDITING":
            return false;
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    itemReducer,
    descriptionReducer,
    amounthReducer,
    addButtonReducer,
    numberOfConceptsReducer,
    deleteEditButtonsReducer,
    itemSelectionReducer,
    itemHided,
    editItemStatus,

})

export default rootReducers