const addProduct = (data) => {
    return{
        type : "ADD_PRODUCT",
        data
    }
}


const removeItem = (id) => {
    return{
        type : "REMOVE_ITEM",
        id
    }
}


const deleteItem = (data) => {
    return{
        type : "DELETE_ITEM",
        data
    }
}


const emptyCart = (data) => ({
    type : "EMPTY_CART",
    data
})


const subQuantity = (data) => ({
    type : "SUB_QUANTITY",
    data
})



const addQuantity = (data) => ({
    type : "ADD_QUANTITY",
    data
})


const addSize = (data) => ({
    type : "ADD_SIZE",
    data
})


const addColor = (data) => ({
    type : "ADD_COLOR",
    data
})





const addShipping = (data) => ({
    type : "ADD_SHIPPING",
    data
})


const billingData = (data) =>{
    console.log("Action Called")
       return {
        type : "BILLING_DATA",
        data
    }
    }
export  {addQuantity, addShipping, subQuantity, emptyCart, deleteItem, removeItem, addProduct, billingData, addSize, addColor};


