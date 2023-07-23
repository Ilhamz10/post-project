const initialState = {
    posts: [],
    selectedSort: 'id',
    totalPages: 0,
}

const LOAD_POSTS = 'LOAD_POSTS'
const SET_SORT = 'SET_SORT'
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_POSTS:
            return {...state, posts: [...action.payload]}
        case SET_SORT:
            return { ...state, selectedSort: action.payload }
        case SET_TOTAL_PAGES:
            return { ...state, totalPages: action.payload}
        default:
            return state
    }
}

export const loadPostsAction = (payload) => ({type: LOAD_POSTS, payload})
export const setTotalPagesAction = (payload) => ({type: SET_TOTAL_PAGES, payload})

export default reducer