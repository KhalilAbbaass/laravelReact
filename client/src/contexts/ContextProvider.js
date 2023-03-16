import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user:null,
    setUser:()=>{},
    token:null,
    setToken:()=>{}
})

export const ContextProvider = ({children}) => {

    const [user, setUser] =  useState({
        name:"Khalil",
    });
    const [token, _setToken] = useState('123');

    //localStorage.getItem('ACCESS_TOKEN')

    const setToken = (token) => {
        _setToken(token)

        if(token){
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }

    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken}}>
                {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);