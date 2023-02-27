import { useNavigate } from 'react-router-dom';
import { authStore } from './../Redux/AuthState';
import { useEffect } from 'react';

//Custom Hook
function useVerifyLoggedIn(){

    const navigate = useNavigate();

    useEffect(()=>{

        // If we don't have a token:
        if(!authStore.getState().token){
            alert("You are not logged in!");
            navigate("/login");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

}

export default useVerifyLoggedIn;