import axios from "axios";
import { API_URL } from "../utils/baseUrl";

const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,

});

export const sendrequest = (config) => {
    return instance.request(config)
}

export const getRequest = (path) => {
    return sendrequest({
        method: 'GET',
        url: path,
    })
}
export const addRequest = (path, data) => {
    return sendrequest({
        method: 'POST',
        url: path ,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    })
}

export const updateRequest = (path, data) => {
    return sendrequest({
        method : 'PUT',
        url : path + data.id,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    })
}

export const deleteRequest = (path, id) => {
    return sendrequest({
        method : 'DELETE',
        url : path + id
    })
}