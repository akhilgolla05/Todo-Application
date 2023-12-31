import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { existsUserApi } from "../services/ApiServices";


//creating a context
const AuthContext =  createContext()



//creating a custom hook to access directly
export const useAuth = ()=>useContext(AuthContext)


 const AuthProvider = ({children})=>{

    const [username, setUsername] = useState(null)

    const [isAuthenticated, setAuthenticated] = useState(false)

    const validateUser = (username)=>{

        if(existsUserApi(username))
        {
            // console.log("true")
            setUsername(username)
            setAuthenticated(true)
            return true
            
        }
        else{
            setAuthenticated(false)
            return false
        }
    }

     


    return(
        <AuthContext.Provider value={{username,validateUser,isAuthenticated, setAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

