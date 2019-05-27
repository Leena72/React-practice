const initialState = {
    total: 0
}

const totalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            let total = state.total + action.data.price;
            return {
                ...state,
                total
            }

        }
        case "ADD_QUANTITY":{
            console.log('inside total reducer add quantity');
            let total = state.total +action.data.price;
            return {
                ...state,
                total
            }
        }
        
        case 'SUB_QUANTITY':{
            let total = state.total - action.data.price;
            return {
                ...state,
                total
            }
        }

        case 'DELETE_ITEM':{
            let total = state.total - action.data.price;
            return {
                ...state,
                total
            }

        }
        
        default: {
            return state;
        }
    }
}
export default totalReducer;