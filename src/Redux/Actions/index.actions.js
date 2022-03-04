import axios from "axios";
import { GET_API_DATA } from "./constantes.actions";

export const getDataApi = () => { 
    return async function (dispatch){
        try {
            // const marvel = await axios('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150&title=Avengers&offset=0&limit=100')
            // const marvel = await axios('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=de06e8d71893c81dcafe1ebb0201333a&hash=A510A472344D5DC346160B26AA7F8103')
            // const marvel = await axios('http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=a86dbb7cb8b9057dd46b90f2ebf0641f&hash=fa0ccb684d6772d64fee522fd3e6fbde')
            const marvel = await axios('http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=a86dbb7cb8b9057dd46b90f2ebf0641f&hash=fa0ccb684d6772d64fee522fd3e6fbde')
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