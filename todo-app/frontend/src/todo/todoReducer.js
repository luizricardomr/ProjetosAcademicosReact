const INITIAL_STATE = {
    description: '',
    list: []
}


function Initial(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCH':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}

export default Initial