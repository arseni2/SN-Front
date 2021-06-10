import axios, { AxiosResponse } from 'axios'
import {postsType} from "../redux/profileReducer";
type postApiType = {
    posts: Array<postsType>
}
function getCookie(name: string) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/profile/',
    headers:     {
        "Authorization": "Token 17a7be5db53845bc5288e870235ff89f2e17d6c1",
        "X-CSRFToken": csrftoken,
    }
});

export const getProfile:any = () => {
    return instance.get(`info/`).then((res) => {
        return res.data
    })
}
export const getReviewsForCurrentPost:any = (id: number) => {
    return instance.get(`reviews/?post_id=${id}`).then((res) => {
        return res.data
    })
}
export const setCountry:any = (country: string) => {
    const formData = new FormData();
    formData.append("country", country);
    return instance.post('changeCountry/', formData).then((res) => {
        return res.data
    })
}
export const addLike:any = (post_id: string) => {
    const formData = new FormData();
    formData.append("post_id", post_id);
    formData.append("likes", '23');
    return instance.post('addLike/', formData).then((res) => {
        return res.data
    })
}
export const delLike:any = (post_id: string) => {
    return instance.post(`delLike/${post_id}/`).then((res) => {
        return res.data
    })
}
export const delComment:any = (comment_id: string | number, post_id: string | number) => {
    const formData = new FormData();
    formData.append("reviews_id", String(comment_id));
    formData.append("post_id", String(post_id));
    return instance.post('deleteReviews/', formData).then((res) => {
        return res.data
    })
}
export const setStatus:any = (statusText:string) => {
    const formData = new FormData();
    formData.append("statusText", statusText);
    return instance.post('changeStatus/', formData).then((res) => {
        return res.data
    })
}
export const deletePost:any = (post_id:number) => {
    return instance.post(`deletePost/${post_id}`).then((res) => {
        return res.data
    })
}
export const editPost:any = (post_id:number, des:string, image:any = null) => {
    const formData = new FormData();
    if(!image){
        formData.append("des", des);
    }else{
        formData.append("image", image);
        formData.append("des", des);
    }
    return instance.put(`updatePost/${post_id}`, formData).then((res) => {
        return res.data
    })
}
export const createPost:any = (text:string, image:any = null) => {
    const formData = new FormData();
    if(!image){
        formData.append("des", text);
    }else{
        formData.append("des", text);
        formData.append("image", image);
    }
    return instance.post('createPostOnWall/', formData, {headers:{'Content-Type': 'multipart/form-data'}}).then((res:AxiosResponse<postApiType>) => {
        return res.data.posts
    })
}
export const createComment:any = (text:string, image:any = null, post_id:number | string, parent_id?:string|number) => {
    const formData = new FormData();
    console.log(parent_id)
    parent_id ? formData.append('parent_id', String(parent_id)) : console.log('это не ответ')
    if(!image){
        formData.append("text", text);
        formData.append('post_id', String(post_id));
    }else{
        formData.append("text", text);
        formData.append("image", image);
        formData.append("post_id", String(post_id));
    }
    return instance.post('createReviews/', formData, {headers:{'Content-Type': 'multipart/form-data'}}).then((res:AxiosResponse<postsType>) => {
        return res.data
    })
}
export enum ResulCodesEnum {
    Success = 1,
    Eror = 2,
}