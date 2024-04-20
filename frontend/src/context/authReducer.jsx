const AuthReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                user: action.payload,
                loading:false
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.payload
            }
        case 'ERROR':
            return{
                ...state,
                error:true,
                loading: false,
                message: action.payload
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading:true
            }

        case 'LOGOUT':
            return{
                ...state,
                user:{},
                loading:false,
                error:false
            }
        default:
            return state
    }
}


export default AuthReducer