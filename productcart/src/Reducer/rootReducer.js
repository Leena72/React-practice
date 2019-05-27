
import { combineReducers } from 'redux';
import { productColor, productDetails, buttonLabels, addedItems } from '../components/Config';
import totalReducer from './total-reducer';

const initState = {
    productColor,
    productDetails,

    count: 0,
    addedItems
};

const change_reducer = (state = initState, action) => {
    switch (action.type) {
        case "onChange": {
            return (
                state
            )
        }
        case 'CHANGE_TSHIRT': {

            let productDetails = state.productDetails.map(product => {
                if (product.id === action.data.id) {
                    product.img = action.data.img;
                    return product;
                }
                else {
                    return product;
                }

            })
            return { ...state, productDetails }
        }

        default: {
            return state;
        }
    }
}

const addToCart = (state = initState,action) => {
    switch(action.type){

        case "ADD_PRODUCT" : {
        let addedItem = state.addedItems.find(item=> item.id === action.data.id);

        let existed_item= state.addedItems.find(item=> action.data.id === item.id);
        if(existed_item)
        {
            addedItem.quantity += 1
            return{
                ...state,
                addedItem:[...state.addedItems, addedItem],
            }
        }
        else
            {
                let addedItem = action.data;
                addedItem.quantity = 1;
          
                let newTotal = state.total + addedItem.price

                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal
                }

             }
        }
        case "EMPTY_CART" : {
            state.addedItems.length=0;
            return  {...state,addedItems};
        }
        case "DELETE_ITEM" : {
            const findIndex = state.addedItems.findIndex(item=>item.id===action.data.id);
            const updatedItems=[...state.addedItems.slice(0,findIndex),
                ...state.addedItems.slice(findIndex+1,state.length)
            ]
             return {
                 ...state,
                 addedItems:updatedItems
             }
        }



    case "REMOVE_ITEM" :{
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
  
    case "ADD_QUANTITY":{
        let addedItem = state.addedItems.find(item=> item.id === action.data.id);
       if(addedItem.quantity <=10 ){
        addedItem.quantity += 1;
        let updatedItems = state.addedItems.map(item=>{
            if(item.id===action.data.id){
                return addedItem
            }
            return item;
        })
        return{
            ...state,
            addedItems:updatedItems,
        }}
        else{
            alert("enter valid quantities");
        }
    }
    case "SUB_QUANTITY":{
        let addedItem = state.addedItems.find(item=> item.id === action.data.id);
        if( addedItem.quantity>1){
        addedItem.quantity -= 1
        let updatedItems = state.addedItems.map(item=>{
            if(item.id===action.data.id){
                return addedItem
            }
            return item;
        })
        return{
            ...state,
            addedItems:updatedItems,
        }}

        else{
            alert("enter valid quantities");
        }
    }


    case "ADD_SIZE": {
        let addedItem = state.addedItems.find(item=> item.id === action.data.id);
        addedItem.size = action.data.size;
        let updatedItems = state.addedItems.map(item=>{
            if(item.id===action.data.id){
                return addedItem
            }
            return item;
        })
        return{
            ...state,
            addedItems:updatedItems,
        }
    }

    case "ADD_COLOR": {
        let addedItem = state.addedItems.find(item=> item.id === action.data.id);
        addedItem.color = action.data.color;
        let updatedItems = state.addedItems.map(item=>{
            if(item.id===action.data.id){
                return addedItem
            }
            return item;
        })
        return{
            ...state,
            addedItems:updatedItems,
        }
    }

        default:{
            return state;
        }
    }
}




const billingData = (state = [], action) => {
    switch (action.type) {
        case "BILLING_DATA": {
            let temporaryData = action.data;
            console.log("Billing Reducer Called", action.data);
            return [...state, temporaryData];
   
        }
        default: {
            return state
        }
    }
}


export const rootReducer = combineReducers({
    change_reducer, addToCart, totalReducer, billingData
}
)
