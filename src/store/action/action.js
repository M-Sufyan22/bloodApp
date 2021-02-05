const saveCurrentUser = (user) => {
    console.log(user, "Action method run")
    return (dispatch) => {
        dispatch({ type: "saveCurrentUser", payload: user })
    }
};

export { saveCurrentUser }