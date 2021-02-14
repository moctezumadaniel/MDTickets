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

const rootReducers = combineReducers({
    itemReducer,
    descriptionReducer,
    amounthReducer

})

export default rootReducers