import { AUTH, LOGOUT, FOLLOW, UNFOLLOW}  from "../actiontypes/actiontypes"

const instate = {
    user: null,
    followers : [],
    followings : []
}

export const authreducer = (state = instate, action) => {

    switch(action.type){

        case AUTH : 
        localStorage.setItem('profile', JSON.stringify({...action?.data}));

        return{
            ...state, user : action.data, followers : action.data.result.followers, followings : action.data.result.followings
        };

        case LOGOUT :
            localStorage.clear();

            return{
                ...state, authdata : null
            };

        case FOLLOW :
            return{
                ...state, followings : [...state.followings, action.payload]
            }    

         case UNFOLLOW :
            return{
                    ...state, followings : state.followings.filter((following) => following!=action.payload)
              }     

        default:
            return state;

    };

}