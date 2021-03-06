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

export const resetItemSelection = ()=>{
    return{
        type: "RESET_ITEM_SELECTION"
    }
}

export const deleteItem = (key)=>{
    return{
        type: "DELETE_ITEM",
        key
    }
}

export const hideItem = (key)=>{
    return{
        type: "HIDE_ITEM",
        key
    }
}

export const disableHiding = ()=>{
    return{
        type: "DISABLE_HIDING"
    }
}

export const activateEditing = ()=>{
    return{
        type: "ACTIVATE_EDITING",
    }
}

export const deactivateEditing = ()=>{
    return{
        type:"DEACTIVATE_EDITING"
    }
}

export const configureItem = (key,description, amounth) =>{
    return{
        type:"CONFIGURE_ITEM",
        description,
        amounth,
        key

    }
}