import * as actiontypes from '../actiontypes/actiontypes';

const instate = {
    doubts : [],
    doubtById :[],
    loading : true
}

export const doubtReducer = (state = instate, action) =>{

    switch(action.type){
        case actiontypes.GET_DOUBT:
            return{
                ...state, doubts :action.payload, loading : false
            }

        case actiontypes.DOUBTBYID :
            return {
                ...state, doubtById : action.payload,
            }    

            default :
            return state
    }
}

