import { ADD_TO_WISHLIST } from "../Action.type"

export const addToWishlist = (id) => (dispatch) => {
    dispatch({type: ADD_TO_WISHLIST, payload :id })
};