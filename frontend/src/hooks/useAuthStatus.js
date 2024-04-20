import { useState, useContext, useEffect, useRef, useMemo } from "react";
// import AuthContext from "@/context/authContext";


export const useAuthStatus =()=>{
    const [loggedIn, setLoggedIn] = useState(false)
    const [ checkingStatus, setCheckingStatus] = useState(true)
    const isMounted = useRef(true)

    useEffect(()=>{

        if(isMounted){
            // const {user} = useContext(AuthContext)
            let user = JSON.parse(localStorage.getItem('user')) 
    
            if(user){
                setLoggedIn(true)
            }else{
                setLoggedIn(false)
            }
            setCheckingStatus(false)
        }

        return ()=>{
            isMounted.current = false
        }
    },[ isMounted])



    // Start here
    // const {user} = useContext(AuthContext)


    // useMemo(()=>{
    //     if(user){
    //         setLoggedIn(true)
    //     }
    //     // else{
    //     //     setLoggedIn(false)
    //     // }

    //     setCheckingStatus(false)
    // },[user])

    // End here

    return {loggedIn,checkingStatus}
}