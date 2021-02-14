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