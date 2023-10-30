import { addDoctorData, deleteDoctorData, getDoctorData, updateDoctorData } from "../../common/api/doctor.api"
import { ADD_DOCTOR, DELETE_DOCTOR, ERROR_DOCTOR, GET_DOCTOR, LOADING_DOCTOR, UPDATE_DOCTOR } from "../Action.type"

export const getDoctor = () => (dispatch) => {
    try{
        dispatch(loadingDoctor())
        setTimeout(() => {
            getDoctorData()
            .then((response) => dispatch({type : GET_DOCTOR , payload : response.data }))
            .catch((error) => (dispatch(errorDoctor(error.message))))
        },1000);
    } catch (error) {
        (dispatch(errorDoctor(error.message)))
    }
}
export const deleteDoctor = (id) => (dispatch) => {
    try{
        deleteDoctorData(id)
        .then(dispatch({type : DELETE_DOCTOR , payload : id}))
        .catch((error) => (dispatch(errorDoctor(error.message))))
    } catch (error) {
        (dispatch(errorDoctor(error.message)))
    }
}
export const addDoctor = (data) => (dispatch) => {
    try{
        addDoctorData(data)
        .then((response) => dispatch({type : ADD_DOCTOR, payload : response.data}))
        .catch((error) => (dispatch(errorDoctor(error.message))))
    }catch(error){
        (dispatch(errorDoctor(error.message)));
    }
}
export const editDoctor = (data) => (dispatch) => {
    try{
        updateDoctorData(data)
        .then((response) => dispatch({type : UPDATE_DOCTOR, payload: response.data}))
        .catch((error) => (dispatch(errorDoctor(error.message))))
    }catch(error){
        (dispatch(errorDoctor(error.message)));
    }
}
export const loadingDoctor = () => (dispatch) => {
    dispatch({type: LOADING_DOCTOR})
}
export const errorDoctor = (error) => (dispatch) => {
    dispatch({type : ERROR_DOCTOR, payload : error})
}