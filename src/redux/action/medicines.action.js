import { json } from "react-router-dom"
import { API_URL } from "../../utils/baseUrl"
import Medicines from "../../admin/container/Medicines/Medicines";
import { ADD_MEDICINES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../Action.type";
import { addMedicinesData, deleteMedicinesData, getMedicinesData, updateMedicinesData } from "../../common/api/medicines.api";

export const getMedicines = () => (dispatch) => {
    try {
        dispatch(loadingMedicines())
        setTimeout(() => {
            getMedicinesData()
            .then((response) => dispatch({ type: GET_MEDICINES, payload: response.data }))
            .catch((error) => (dispatch(errorMedicines(error.message))))
        }, 1000);
    } catch (error) {
        (dispatch(errorMedicines(error.message)))
    }
}

export const deleteMedicines = (id) => (dispatch) => {
    try {
        deleteMedicinesData(id)
        .then(dispatch({type : DELETE_MEDICINES, payload : id}))
        .catch((error) => (dispatch(errorMedicines(error.message))))
    } catch (error) {
        (dispatch(errorMedicines(error.message)));
    }
}

export const addMedicines = (data) => (dispatch) => {
    try{
        addMedicinesData(data)
        .then((respones) => dispatch({type: ADD_MEDICINES, payload : respones.data}))
        .catch((error) => (dispatch(errorMedicines(error.message))))
    }
    catch (error) {
        (dispatch(errorMedicines(error.message)));
    }
}
export const updateMedicines = (data) => (dispatch) => {
    try {
        updateMedicinesData(data)
         .then((response) => dispatch({type: UPDATE_MEDICINES, payload : response.data}))
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