const initState = {
    total : 0
}

const totalReducer = (state = initState, action) =>{
    switch(action.type) {
        case 'ADD_PRODUCT':{
            let tempState = {...state};
            let total = tempState.total + action.data.price;
            return {
                ...state, 
                total
            }
        }
        case 'INCREMENT' :{
            let tempState = {...state};
            let total = tempState.total + action.data.price;
            return {
                ...state, 
                total
            }
        }
        case 'DECREMENT':{
            let tempState = {...state};
            let total = tempState.total - action.data.price;
            return {
                ...state, 
                total
            }
        }
        case 'DELETE_PRODUCT':{
            let tempState = {...state};
            let total = tempState.total - action.data.price;
            return {
                ...state, 
                total
            };
        }
        case 'CLEAR_PRODUCTS':{
         return {
             ...state,
             total:0
         }
        }
        default : {
            return state;
        }
    }
}

export default totalReducer;