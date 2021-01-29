const saveCurrentUser = (user) => {
    console.log(user)
    return (dispatch) => {
        dispatch({ type: "saveCurrentUser", payload: user })
    }
};

export { saveCurrentUser }