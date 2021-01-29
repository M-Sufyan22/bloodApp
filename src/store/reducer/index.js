const Initial_State = {
    currentUser: {}
};

const store = (state = Initial_State, action) => {
    switch (action.type) {
        case "saveCurrentUser":
            return ({
                currentUser: action.payload
            })
        default:
            return (state)
    }
};

export default store;