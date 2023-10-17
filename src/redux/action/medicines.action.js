import { json } from "react-router-dom"
import { API_URL } from "../../utils/baseUrl"
import Medicines from "../../admin/container/Medicines/Medicines";
import { DELETE_MEDICINES, GET_MEDICINES } from "../Action.type";

export const getMedicines = () => (dispatch) => {
    try {
        fetch(API_URL + "medicines")
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_MEDICINES, payload: data }))

    } catch (error) {
        console.log(error);
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        fetch(API_URL + "medicines/" + id, {method : 'DELETE'})
        .then((respones) => respones.json())
        .then((data) => dispatch({type : DELETE_MEDICINES, payload : id}))
        
    } catch (error) {
        console.log(error);
    }
}