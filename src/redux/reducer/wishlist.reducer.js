import { ADD_TO_WISHLIST } from "../Action.type";

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
            let check = state.wishList.some((v) => v.id === action.payload.id);
            console.log(check);

            if (check) {
                let index = state.wishList.findIndex((w) => w.id === action.payload.id);
                console.log(index);
                state.wishList[index]++;
            } else {
                state.wishList.push(action.payload)
            }
            return {
                ...state,
                wishList: state.wishList.push(action.payload)
            }
        default:
            return state;
    }

}