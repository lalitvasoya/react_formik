import { INCREMENT_COUNT, DECREMENT_COUNT } from "../action/countAction"


const countReducer = (state = 0, action) => {
    switch(action.type){
        case INCREMENT_COUNT:{
            return action.payload
        }
        case DECREMENT_COUNT:{
            return action.payload
        }
        default:{
            return state
        }       
    }
}

export {countReducer};
