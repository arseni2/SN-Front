import React from 'react'
import {Avatar, Comment} from "antd";
import "antd/dist/antd.css";
import dots from '../static/three_dots.svg'
import DropDownWrapper from './DropDownWraper';



type commentTypeProps = {
    children?: any
    userName: string
    textComment: string
    avatar: string
    id: number
    post_id: number
    parent_id?: number
    answer_clickFn: (e:any, id: string | number, post_id:number|string)=> void
}
const CommentPost = ({children, userName, textComment, avatar, id, post_id, parent_id, answer_clickFn}:commentTypeProps) => {
    return (<>
        <Comment
            actions={[]}
            author={<div className={'comment_info'}><a>{userName}

                <DropDownWrapper id={id} post_id={post_id}><img style={{marginLeft: '60px', marginTop: '-55px'}} src={dots} width={'20px'} height={'20px'}/></DropDownWrapper>
                <div style={{marginLeft: '100px', marginTop: '-5px', position: 'absolute'}} onClick={(e) => {
                    localStorage.setItem('post_id', String(post_id))
                    answer_clickFn(e, id, post_id)
                }}>{parent_id ? '' : 'answer'}</div>
            </a></div>}
            avatar={
                <Avatar
                    src={avatar}
                    alt="Han Solo"
                />
            }
            content={
                <p style={{marginTop: '-25px'}}>
                    {textComment}
                </p>
            }
        >
            {children}
        </Comment>
    </>)
}
export default CommentPost