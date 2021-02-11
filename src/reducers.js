
const itemReducer = (state = [], action)=>{
    switch(action.type){
        case"NEW_ITEM":
            return [...state,action.payload];
        default:
            return state;
    }
}

export default itemReducer