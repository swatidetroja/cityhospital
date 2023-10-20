import { API_URL } from "../../utils/baseUrl"
import { ADD_DEPARTMENTS, DELETE_DEPARTMENTS, GET_DEPARTMENTS, UPDATE_DEPARTMENTS } from "../Action.type"

export const getDepartments = () => (dispatch) => {
    try{
        fetch(API_URL + "department")
        .then((response) => response.json())
        .then((data) => dispatch({ type : GET_DEPARTMENTS, payload : data}))
        .catch((error) => console.log(error))
    }catch (error) {
        console.log(error);
    }
}
export const deleteDepartments = (id) => (dispatch) => {
    try {
        fetch(API_URL + "department/" + id, {method : 'DELETE'})
        .then((response) => response.json())
        .then(dispatch({type : DELETE_DEPARTMENTS, payload : id }))
    } catch (error) {
        console.log(error);
    }
}
export const addDepartments = (data) => (dispatch) => {
    try {
        fetch(API_URL + "department", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              },
        })
        .then((response) => response .json())
        .then((rdata) => dispatch({type : ADD_DEPARTMENTS , payload : rdata}))
        .catch((error) => console.log(error))
        
    } catch (error) {
        console.log(error);
    }
}
export const updateDepartments = (data) => (dispatch) => {
    try {
        fetch(API_URL + 'department/' + data.id , {
            method : 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              },
        })
        .then((response) => response.json())
        .then((rdata) => dispatch({ type: UPDATE_DEPARTMENTS, payload : rdata}))
    } catch (error) {
        console.log(error);
    }
}