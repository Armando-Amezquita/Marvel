import axios from "axios";
import { GET_API_DATA } from "./constantes.actions";

export const getDataApi = () => { 
    return async function (dispatch){
        try {
            const marvel = await axios('http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=a86dbb7cb8b9057dd46b90f2ebf0641f&hash=fa0ccb684d6772d64fee522fd3e6fbde');
            // const marvel = await axios('http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=a86dbb7cb8b9057dd46b90f2ebf0641f&hash=fa0ccb684d6772d64fee522fd3e6fbde')
            console.log('datadelApidaat', marvel.data.data.results)
            return dispatch({
                type: GET_API_DATA,
                payload: marvel.data.data.results
            })
        } catch (error) {
            console.log(error)
        }
    }
};