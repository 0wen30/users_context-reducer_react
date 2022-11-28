import { useReducer } from "react"
import { getUsers, setUsers } from "./helpers";
import UserContext from "./UserContext"

import UserReducer from "./UserReducer";

const UserState = ({children}) => {
    
    const initialState = { users: [] }

    const [globalState, dispatch] = useReducer(UserReducer,initialState);

    const readUsers = async() => {
        try {
            const data = await getUsers();            
            dispatch({ type:"READ_USERS", payload: data.users });
        } catch (error) {
            console.log(error)
        }
    }

    const addUser = async(data) => {
        try {
            await setUsers(data);
            dispatch({ type:"ADD_USERS", payload: data });
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UserContext.Provider value={{users:globalState.users,readUsers,addUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserState