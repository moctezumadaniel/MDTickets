import { combineReducers } from "redux";

const itemReducer = (state = [], action)=>{
    switch(action.type){
        case"NEW_ITEM":
            return [...state,action.payload];
        default:
            return state;
    }
}

const descriptionReducer = (state = "", action) =>{
    switch(action.type){
        case "CHANGE_DESCRIPTION":
            return action.payload;
        default:
            return state
    }
}

const amounthReducer = (state="", action)=>{
    switch(action.type){
        case "CHANGE_AMOUNTH":
            return action.payload;
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

const rootReducers = combineReducers({
    itemReducer,
    descriptionReducer,
    amounthReducer,
    addButtonReducer

})

export default rootReducers