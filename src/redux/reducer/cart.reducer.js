import { ADD_TO_CART, DECREMENT_QTY, DELETE_ITEM, INCREMENT_QTY } from "../Action.type";

const initialState = {
    isLoading: false,
    cart: [],
    error: null,
}

export const cartReducer = (state = initialState, action) => {
    console.log(action);
    console.log(state.cart);
    switch (action.type) {
        case ADD_TO_CART:
            let check = state.cart.some((v) => v.id === action.payload.id)
            console.log(check);

            if (check) {
                let index = state.cart.findIndex((v) => v.id === action.payload.id);
                console.log(index);
                state.cart[index].qty++
            } else {
                state.cart.push(action.payload)
            }
            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }
        case INCREMENT_QTY:
            let index = state.cart.findIndex((v) => v.id === action.payload)
            console.log(index);
            state.cart[index].qty++
            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }
        case DECREMENT_QTY:
            let index1 = state.cart.findIndex((v) => v.id === action.payload);
            console.log(index1);
            if (state.cart[index1].qty > 1) {
                state.cart[index1].qty--;
            }
            return {
                isLoading: false,
                cart: state.cart,
                error: null
            }
        case DELETE_ITEM:
           
            return {
                ...state,
                cart : state.cart.filter((v) => v.id !== action.payload)
            }
        default:
            return state
    }

}