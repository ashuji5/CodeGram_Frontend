import * as api from '../../api/index';
import * as actiontypes from '../actiontypes/actiontypes'

export const getDoubt = () => async(dispatch) =>{
    try {
        
        const {data} = await api.fetchDoubts(); 

        dispatch({
            type : actiontypes.GET_DOUBT,
            payload : data
        });

    } catch (error) {

        console.log(error.message);
        
    }
};

export const getDoubtById = (doubtId) => async(dispatch) =>{
    try {

    const {data} = await api.fetcchDoubtById(doubtId);

    dispatch({
        type : actiontypes.DOUBTBYID,
        payload : data
    })
        
    } catch (error) {

        console.log(error.message);
        
    }
}

export const createDoubt = (doubt) => async(dispatch) =>{
    try {

        const {data} = api.createDoubt(doubt);
        
    } catch (error) {

        console.log(error.message);
        
    }
}

export const createAnswer = (doubtId,doubtAnswer) =>async(dispatch) =>{
    try {
        
        const {data} = await api.postAnswer(doubtId, doubtAnswer);
    } catch (error) {
        console.log(error.message);
    }
}