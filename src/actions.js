export const addConcept = (conceptNumber,description,amounth)=>{
    return{
        type:"NEW_ITEM",
        conceptNumber,
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

export const incrementNumberOfConcepts = ()=>{
    return{
        type: "INCREMENT_NUMBER_OF_CONCEPTS"
    }
}

export const activateDeButtons = ()=>{
    return{
        type: "ACTIVATE_DE_BUTTONS"
    }
}

export const deactivateDeButtons = ()=>{
    return{
        type:"DEACTIVATE_DE_BUTTONS"
    }
}

export const selectItem = (key)=>{
    return {
        type:"ITEM_SELECTED",
        key
    }
}

export const deleteItem = (key)=>{
    return{
        type: "DELETE_ITEM"
    }
}