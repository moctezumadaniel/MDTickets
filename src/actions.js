export const newItem = (description, amounth)=>{
    return{
        type: "NEW_ITEM",
        payload:{
            description,
            amounth
        }
    }
}