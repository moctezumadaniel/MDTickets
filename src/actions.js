export const addConcept = (description,amounth)=>{
    return{
        type:"NEW_ITEM",
        description,
        amounth
    }
}

export const changeDescription = (description)=>{
    return{
        type: "CHANGE_DESCRIPTION",
        payload:description
    }
}

export const resetDescription = ()=>{
    return{
        type: "RESET_DESCRIPTION"
    }
}

export const changeAmounth = (amounth)=>{
    return{
        type: "CHANGE_AMOUNTH",
        payload:amounth
    }
}

export const resetAmounth = ()=>{
    return{
        type: "RESET_AMOUNTH"
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

export const addAmounthToGrandTotal = (newAmounth)=>{
    return{
        type: "ADD_AMOUNTH_TO_GT",
        newAmounth
    }

}