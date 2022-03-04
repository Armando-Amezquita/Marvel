import { GET_API_DATA } from "../Actions/constantes.actions"
const initialState = {
    dataApi: []
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_API_DATA:
            return {
                ...state,
                dataApi: action.payload
            }
        default:
            return{
                ...state
            }
    }
}
