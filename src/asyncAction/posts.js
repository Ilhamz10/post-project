import { loadPostsAction, setTotalPagesAction } from "../store/reducer"
import PostService from "../API/PostService"
import { getPageCount } from "../utils/pages"

export const fetchPosts = (limit, page) => {
    return async (dispatch) => {
        const response = await PostService.getPosts(limit, page)
        dispatch(loadPostsAction(response.data))
        const totalCount = response.headers['x-total-count']
        dispatch(setTotalPagesAction(getPageCount(totalCount, limit)))
    }
}