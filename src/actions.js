export const newItem = (description, amounth)=>{
    return{
        type: "NEW_ITEM",
        payload:{
            description,
            amounth
        }
    }
}

export const ChangeDescription = (description)=>{
    return{
        type: "CHANGE_DESCRIPTION",
        payload:description
    }
}

export const ChangeAmounth = (amounth)=>{
    return{
        type: "CHANGE_AMOUNTH",
        payload:amounth
    }
}