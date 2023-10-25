import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentsReducer } from "./departmenst.reducer";
import { cartReducer } from "./cart.reducer";
import { wishListReducer } from "./wishlist.reducer";

export const rootReducer = combineReducers ({
    counter : counterReducer,
    medicines : medicinesReducer,
    departments : departmentsReducer,
    cart: cartReducer,
    wishList : wishListReducer
})