import { ADD_TO_WISHLIST, REMOVE_FROME_WISHLIST } from "../Action.type";

const initailState = {
    isLoading: false,
    wishList: [],
    error: null
}

export const wishListReducer = (state = initailState, action) => {
    console.log(action);
    console.log(state.wishList);
    switch (action.type) {
        case ADD_TO_WISHLIST:
            let check = state.wishList.some((v) => v === action.payload);
            console.log(check);
            state.wishList.push(action.payload)
            // if (check) {
            //     let index = state.wishList.findIndex((w) => w === action.payload);
            //     console.log(index);
            //     state.wishList[index]++;
            // } else {
                
            // }
            return {
                wishList : state.wishList
            }
        case REMOVE_FROME_WISHLIST :
            return{
                ...state,
                wishList : state.wishList.filter((v,i) => v.id !== action.payload)
            }
        default:
            return state;
    }

}