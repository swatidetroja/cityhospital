import { ADD_DOCTOR, DELETE_DOCTOR, ERROR_DOCTOR, GET_DOCTOR, LOADING_DOCTOR, UPDATE_DOCTOR } from "../Action.type";

const initialState = {
    isLoading: false,
    doctor: [],
    error: null
}

export const doctorReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ERROR_DOCTOR:
            return {
                isLoading: false,
                doctor: [],
                error: action.payload
            }
        case LOADING_DOCTOR:
            return {
                isLoading: true,
                doctor: [],
                error: null
            }
        case GET_DOCTOR:
            return{
                isLoading: false,
                doctor: action.payload,
                error: null
            }
        case DELETE_DOCTOR:
            return{
               ...state,
               doctor : state.doctor.filter((v,i) => v.id !== action.payload)
            }
        case ADD_DOCTOR:
            return{
                ...state,
                doctor : state.doctor.concat(action.payload)
            }
        case UPDATE_DOCTOR :
            return{
                ...state,
                doctor : state.doctor.map((v) => {
                    if(v.id === action.payload.id){
                        return action.payload
                    } else {
                        return v
                    }
                })
            }
    default:
        return state
    }


}