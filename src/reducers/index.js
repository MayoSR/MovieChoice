const initialState = {
    
}

// Use the initialState as a default value
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "EDIT_USER_DETAILS":
            state = {...state,name:action.name,friendCode:action.code}
            return state
        default:
            return state
    }
}   