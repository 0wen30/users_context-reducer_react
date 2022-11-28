const UserReducer = (globalState, action) => {

    switch (action.type) {
        case "READ_USERS":
            return {...globalState,users:action.payload}
        case "ADD_USERS":
            return { ...globalState, users: [...globalState.users, action.payload] }
        
    }

}

export default UserReducer