import { ADD_TO_WISHLIST, REMOVE_FROME_WISHLIST } from "../Action.type"

export const addToWishlist = (id) => (dispatch) => {
    dispatch({type: ADD_TO_WISHLIST, payload :id })
}

export const removeFromWishlist = (id) => (dispatch) => {
    dispatch({type: REMOVE_FROME_WISHLIST, payload: id})
}