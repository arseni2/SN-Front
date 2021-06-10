import React, {useEffect, useState} from 'react'
import {LikeFilled, LikeOutlined} from "@ant-design/icons";
import {addLikeThunk, delLikeThunk, LikesType} from "../../redux/profileReducer";
import {useDispatch} from "react-redux";

type propsType = {
    likes_count: number
    likes: Array<LikesType>
    post_id:number|string
    user_id: number | string
}
//сверять айди карент юзера с айдишниками юзеров которые сидят в масиве like у поста
//дизлайк не работает так как с сервака ничего не удаляю
const Like = (props:propsType) => {
    let [isLike, setIsLike] = useState(false)
    useEffect(()=>{
        props.likes.map((like)=>{
            like.user.id==props.user_id ?
                setIsLike(like.user.id==props.user_id) : setIsLike(false)
        })
    }, [])
    let [checkId, setCheckId] = useState('0')
    let dispatch = useDispatch()
    return (<>
        {isLike ? <div style={{fontSize: '20px'}} onClick={()=>{
            setCheckId(String(props.post_id))
            localStorage.setItem('data-id', checkId)
            //@ts-ignore
            if(localStorage.getItem('data-id') == checkId){setIsLike(false); dispatch(delLikeThunk(props.post_id))}
        }} ><LikeFilled />{Number(props.likes_count) /*+ 1*/}</div> : <div style={{fontSize: '20px'}} onClick={()=>{
            setCheckId(String(props.post_id))
            localStorage.setItem('data-id', checkId)
            //@ts-ignore
            if(localStorage.getItem('data-id') == checkId){setIsLike(true); dispatch(addLikeThunk(props.post_id))}
        }} ><LikeOutlined /></div>}
    </>)
}

export default React.memo(Like)