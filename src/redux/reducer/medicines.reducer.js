import { DELETE_MEDICINES, GET_MEDICINES } from "../Action.type"

const intialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const medicinesReducer = (state=intialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_MEDICINES:
            return {
                ...state,
                medicines: action.payload
            }
        case DELETE_MEDICINES:
            return{
                ...state,
                medicines : state.medicines.filter((v,i) => v.id !== action.payload)
            }
        default:
            return state
    }

}