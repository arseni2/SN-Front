import {AppStateType, InferActionsTypes} from "./store";
import {
    addLike,
    createComment,
    createPost, delComment,
    deletePost, delLike,
    editPost,
    getProfile,
    ResulCodesEnum,
    setCountry,
    setStatus
} from "../api/profile";
import {call, put, takeEvery} from 'redux-saga/effects'
export type LikesType = {
    user: {id: number, full_name: string}
    likes: number
    id: number
}
export type profileType = {
    id: number
    email: string
    birth_date: null | string
    status: string
    country: string
    year: null | string
    first_name: string
    last_name: string
    username: string
    full_name: string
    slug: string
    userPhotos: string
    is_active: boolean
    is_admin: boolean
}
export type reviewsType = {
    user: profileType
    text: string
    post_id: number
    image: null | string
    id: number
    parent_id?: number
}
export type postsType = {
    id: number
    des: string
    image: string | null
    likes_count: number
    date: string
    user: profileType
    reviews: [] | Array<reviewsType>
    editMode: boolean
    like: Array<LikesType>
}
let InitialState = {
    isLoading: true,
    profile: [],
    posts: [],
}
export type InitialStateType = {
    profile: Array<Array<profileType>>
    posts: Array<postsType>
    isLoading: boolean
}
type ActionsType = InferActionsTypes<typeof actions>
// коменты мрожно получатть с сервака массив children  каждого коммента
const ProfileReducer = (state: InitialStateType = InitialState, action: ActionsType) => {
    switch (action.type) {
        case 'PROFILE':
            return {
                ...state,
                posts: action.post,
                profile: action.profile,
                isLoading: action.load,
            }
        case 'ADD_LIKE':
            return {
                ...state,
                posts: state.posts.map((postState) => {
                    if (postState.id === action.post.id) {
                        return {...postState, like: action.post.like, likes_count: action.post.likes_count}
                    } else {
                        return postState
                    }
                })
            }
        case 'CHANGESTATUS':
            return {
                ...state,
                profile: action.newStatus
            }
        case 'CHANGECOUNTRY':
            return {
                ...state,
                profile: action.newStatus
            }
        case 'CREATEPOST':
            return {
                ...state,
                posts: action.post
            }
        case 'DELETE_COMMENT':
            return {
                ...state,
                posts: state.posts.map((postState) => {
                    if (postState.id === action.post.id) {
                        return {...postState, reviews: action.post.reviews}
                    } else {
                        return postState
                    }
                })
            }
        case 'SET_COMMENT':
            return {
                ...state,
                posts: state.posts.map((postState) => {
                    if (postState.id === action.post.id) {
                        return {...postState, reviews: action.post.reviews}
                    } else {
                        return postState
                    }
                })
            }
        case 'GET_REVIEWS':
            return {
                //тут надо сравнивать айди поста с айди поста в коменте и сетать коменты этому посту
                ...state,
                posts: state.posts.map((postState) => {
                    if (action.reviews.length === 0) {
                        return postState
                    } else {
                        if (action.reviews[0].post_id === postState.id) {
                            return {...postState, reviews: action.reviews}
                        } else {
                            return postState
                        }

                    }
                })
            }
        case 'UPDATEPOST':
            return {
                ...state,
                posts: state.posts.map(postState => postState.id === action.post.id ?
                    // transform the one with a matching id
                    {
                        ...postState,
                        des: action.post.des,
                        image: action.post.image ? action.post.image.slice(21) : null
                    } :
                    postState
                )
            }

        default:
            return state;
    }
}
// выводить ошибки при редактировании
// попробую сделать комментарии если будет сложно оставлю на потом
// на серваке работа с картинками в джанг и ввывод их в админке
export type GetStateType = () => AppStateType
export const actions = {
    ProfilePage: (post: postsType, profile: Array<profileType>, load: boolean) => ({
        type: 'PROFILE',
        post,
        profile,
        load
    } as const),
    changeStatus: (newStatus: profileType) => ({type: 'CHANGESTATUS', newStatus} as const),
    changeCountry: (newStatus: profileType) => ({type: 'CHANGECOUNTRY', newStatus} as const),
    createPost: (post: postsType) => ({type: 'CREATEPOST', post} as const),
    editPost: (post: postsType) => ({type: 'UPDATEPOST', post} as const),
    getReviews: (reviews: Array<reviewsType>) => ({type: 'GET_REVIEWS', reviews} as const),
    createReviews: (post: postsType) => ({type: 'SET_COMMENT', post} as const),
    addLike: (post: postsType) => ({type: 'ADD_LIKE', post} as const),
    deleteReviews: (post: postsType) => ({type: 'DELETE_COMMENT', post} as const),
    deleteReviewsRequest: (post_id:string | number, comment_id:string | number) => ({type: 'DELETE_COMMENT_REQ', post_id, comment_id} as const),
}
export const getUserProfileThunk = () => async (dispatch: any) => {
    let profileData = await getProfile()
    if (profileData.success === ResulCodesEnum.Success) {
        let {posts, profile} = profileData
        dispatch(actions.ProfilePage(posts, profile, false))
    }

}

export const setStatusUserThunk = (statusText: string) => async (dispatch: any) => {
    let profileData = await setStatus(statusText)
    let {profile} = profileData
    dispatch(actions.changeStatus(profile))
}
export const setCountryUserThunk = (country: string) => async (dispatch: any) => {
    let profileData = await setCountry(country)
    let profile = profileData.profile
    dispatch(actions.changeCountry(profile))
}
export const createPostThunk = (text: string, image: any) => async (dispatch: any) => {
    let post: any = await createPost(text, image)
    dispatch(actions.createPost(post))
}
export const deletePostThunk = (post_id: number) => async (dispatch: any) => {
    let post: any = await deletePost(post_id)
    dispatch(actions.createPost(post))
}
export const editPostThunk = (post_id: number, des: string, image: any) => async (dispatch: any) => {
    let post: any = await editPost(post_id, des, image)
    dispatch(actions.editPost(post))
}
export const createCommentThunk = (text: string, image: any, post_id: number | string | null, parent_id?:string|number) => async (dispatch: any) => {
    let post: any = await createComment(text, image, post_id, parent_id)
    dispatch(actions.createReviews(post))
}
export const addLikeThunk = (post_id: string) => async (dispatch: any) => {
    let post: any = await addLike(post_id)
    dispatch(actions.addLike(post[0]))
}
export const delLikeThunk = (post_id: string) => async (dispatch: any) => {
    let post: any = await delLike(post_id)
    dispatch(actions.addLike(post))
}
export {ProfileReducer}

export function* sagaWatcher() {
    yield takeEvery('DELETE_COMMENT_REQ', sagaWorker)
}
export function* sagaWorker(action:any):Generator<any, any, any>{
    const payload = yield call(delComment, action.comment_id, action.post_id)
    yield put(actions.deleteReviews(payload[0]))
}