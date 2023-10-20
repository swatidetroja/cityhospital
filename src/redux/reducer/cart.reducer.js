import { ADD_TO_CART, INCREMENT_CART } from "../Action.type";

const initialState = {
    isLoading: false,
    cart: [],
    error:null,
    count:0
}

export const cartReducer = (state=initialState, action) =>{
    console.log(action);
    console.log(state.cart);
    switch(action.type) {
        case ADD_TO_CART:
            let check = state.cart.some((v) => v.id === action.payload.id)
            console.log(check);

            if(check){
                let index = state.cart.findIndex((v) => v.id === action.payload.id);
                console.log(index);
                state.cart[index].qty++
            }else{
                state.cart.push(action.payload)
            }
            return{
                cart : state.cart
            }
        case INCREMENT_CART:
            return{
                ...state,
                count : state.count + 1
            }
        default:
            return state
    }
   
}