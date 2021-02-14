export const newItem = (description, amounth)=>{
    return{
        type: "NEW_ITEM",
        payload:{
            description,
            amounth
        }
    }
}

export const changeDescription = (description)=>{
    return{
        type: "CHANGE_DESCRIPTION",
        payload:description
    }
}

export const changeAmounth = (amounth)=>{
    return{
        type: "CHANGE_AMOUNTH",
        payload:amounth
    }
}

export const activateAddButton = ()=>{
    return{
        type: "ACTIVATE_BUTTON"
    }
}

export const deactivateAddButton = ()=>{
    return{
        type: "DEACTIVATE_BUTTON"
    }
}