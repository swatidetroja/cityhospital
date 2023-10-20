import { json } from "react-router-dom"
import { API_URL } from "../../utils/baseUrl"
import Medicines from "../../admin/container/Medicines/Medicines";
import { ADD_MEDICINES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../Action.type";

export const getMedicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        setTimeout(() => {
            fetch(API_URL + "medicines")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                  }
                  throw new Error("Something went wrong!");
            })
            .then((data) => dispatch({ type: GET_MEDICINES, payload: data }))
            .catch((error) => (dispatch(errorMedicines(error.message))))
        }, 4000);
    } catch (error) {
        (dispatch(errorMedicines(error.message)))
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        fetch(API_URL + "medicines/" + id, {method : 'DELETE'})
        .then((respones) => {
            if(respones.ok){
                return respones.json();
            }
            throw new Error("Something went wrong!")
        })
        .then(dispatch({type : DELETE_MEDICINES, payload : id}))
        .catch((error) => (dispatch(errorMedicines(error.message))))
    } catch (error) {
        (dispatch(errorMedicines(error.message)));
    }
}

export const addMedicines = (data) => (dispatch) => {
    try{
        fetch(API_URL + "medicines", {
            method : "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              },
        })
        .then((respones) => {
            if(respones.ok) {
                return respones.json();
            }
            throw new Error("Something went wrong!")
        })
        .then((rdata) => dispatch({type: ADD_MEDICINES, payload : rdata}))
        .catch((error) => (dispatch(errorMedicines(error.message))))
    }
    catch (error) {
        (dispatch(errorMedicines(error.message)));
    }
}
export const updateMedicines = (data) => (dispatch) => {
    try {
        fetch(API_URL + 'medicines/' + data.id , {
            method : 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              },
        })
        .then((response) => {
            if(response.ok){
                return  response.json()
            }
            throw new Error("Something went wrong!")
        })
        .then((rdata) => dispatch({type: UPDATE_MEDICINES, payload : rdata}))
        .catch((error) => (dispatch(errorMedicines(error.message))))
    } catch (error) {
        (dispatch(errorMedicines(error.message)));
    }
}
export const loadingMedicines = () => (dispatch) => {
    dispatch({type : LOADING_MEDICINES})
}
export const errorMedicines = (error) => (dispatch) => {
    dispatch({type : ERROR_MEDICINES, payload : error})
}