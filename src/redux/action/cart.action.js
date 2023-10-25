import { ADD_TO_CART, DECREMENT_QTY,DELETE_ITEM,INCREMENT_QTY } from "../Action.type"

export const addToCart = (id) => (dispatch) => {
    dispatch({type: ADD_TO_CART , payload : {id :id, qty : 1}})
}
export const incrementQty = (id) => (dispatch) => {
    dispatch({type : INCREMENT_QTY , payload : id})
}
export const decrementQty = (id) => (dispatch) => {
    dispatch({type : DECREMENT_QTY , payload : id})
}
export const deleteItem = (id) => (dispatch) => {
    dispatch({type: DELETE_ITEM , payload : id})
}
