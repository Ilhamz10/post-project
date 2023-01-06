const initialState = {
    posts: [
        { id: 1, title: 'aa', body: 'cc' },
        { id: 2, title: 'rr', body: 'aa' },
        { id: 3, title: 'bb', body: 'dd' }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POST':
            return { ...state, posts: [...state.posts, action.payload] }
        case 'DELETE_POST':
            return { ...state, posts: state.posts.filter((item) => item.id !== action.payload), sortedPosts: [...state.posts] }
        case 'SORT':
            return {...state, posts: [...state.posts].sort((a, b) => a[action.payload].localeCompare(b[action.payload]))}
        default:
            return state
    }
}

export default reducer