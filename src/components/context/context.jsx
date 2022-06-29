export const initialState = {
    isBot: true
}

export const Reducer = (state, action) => {
    switch(action.type) {
        case 'update':
            console.log("update")
            return {...state, isBot: !state.isBot};
        default:
            return state;
    }
}