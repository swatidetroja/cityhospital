import { ADD_TO_CART, INCREMENT_CART } from "../Action.type"

export const addToCart = (id) => (dispatch) => {
    dispatch({type: ADD_TO_CART , payload : {id :id, qty : 1}})
}
export const incrementCart = (id) => (dispatch) => {
    dispatch({type : INCREMENT_CART, payload : id})
}