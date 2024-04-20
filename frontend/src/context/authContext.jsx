import axios from 'axios'
import {createContext, useReducer, useEffect} from 'react'
import AuthReducer from './authReducer.jsx'

import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    
    let user = JSON.parse(localStorage.getItem('user'))
    const initialState ={
        user: user? user : {},
        loading: false,
        error: false,
        message:''
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        user = user ? user : {}
        setUser(user)
    }, []);
    
    const [state,dispatch]= useReducer(AuthReducer,initialState)
    const navigate = useNavigate()

    const login = async(data)=>{
        setLoading()
        try {
            // const response = await axios.post(`${baseUrl}/auth/login`, data);
            const response = await axios.post(`https://tiixiio.onrender.com/auth/login`, data);
            console.log(response.data);
            const dataw = response.data
            // if (response.status === 201) {
            //   toast.success("Logged In Sucessfully!");
            //   localStorage.setItem('token', response.data.token);
            //   //console.log(response.data)

            //   setTimeout(() => {
            //     dispatch({
            //         type:'LOGIN',
            //         payload: dataw
            //     })
            //   }, 3000);
            // }
            console.log(dataw)
            localStorage.setItem('user', JSON.stringify(dataw));
            dispatch({
                type:'LOGIN',
                payload: dataw
            })

            navigate('/user/dashboard/overview')
            
            // setTimeout(() => { navigate('/user/dashboard/overview')}, 3000)

          } catch (error) {
            // console.error(error);
            // toast.error(error.message);
            dispatch({
                type:'ERROR',
                payload: error
            })
          }
    }

    const logout =()=>{
        setLoading()
        
        localStorage.removeItem('user')
        dispatch({
            type: 'LOGOUT'
        })
    }
    const setLoading = ()=>{
        dispatch({
            type: 'SET_LOADING'
        })
    }
    const setUser = (user)=>{
        dispatch({
            type: 'SET_USER',
            payload: user
        })
    }
    return <AuthContext.Provider value={{
        user: state.user,
        loading:state.loading,
        error: state.error,
        message:state.message,
        login,
        logout
    }}>
        {
            children
        }
    </AuthContext.Provider>
}

export default AuthContext