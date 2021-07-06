import React, {useEffect, useRef, useState} from 'react'
import {
    createCommentThunk,
    deletePostThunk,
    editPostThunk,
    getUserProfileThunk,
    postsType,
    reviewsType,
    setCountryUserThunk,
    setStatusUserThunk
} from "../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {AddPostForm} from "./addPostUserProfileForm";
import 'semantic-ui-css/semantic.min.css'
import CommentPost from '../../utils/comment'
import UserProfileLoader from "./userProfileLoader";
import {LikeOutlined, LikeFilled} from '@ant-design/icons'
import Like from "./LikePost";

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}
/*написать ответ на отзыв и выводить его можно проверятьесли айди коммента равно парент айди то увеличить сдвиг слева*/
const UserProfile = React.memo(() => {
    let [isAnswer, setIsAnswer] = useState(false)
    let [parent_id, setParent_id] = useState('')
    let [post_id, setPost_id] = useState('')
    const answer_clickFn = (e: any, id: string | number, post_id: string | number) => {
        setIsAnswer(true)
        setParent_id(String(id))
        setPost_id(String(post_id))
    }
    let [textReviews, setTextReviews] = useState('')
    let [toggleCommentSchow, setToggleCommentSchow] = useState(false)
    let [isShowAll, setIsShowAll] = useState(false)
    let [imagePostEdit, setImagePostEdit] = useState(null)
    let [editModePost, setEditModePost] = useState({
        des: '',
        image: null as any
    })
    const forceUpdate = useForceUpdate();
    const inputEl = useRef(null);
    let [clientX, setClientX] = useState(0)
    let [editMode, setEditMode] = useState(false)
    let [showForm, setShowForm] = useState(false)
    let [statusOnstatus, setstatusOnstatus] = useState('')
    let [country, setCountry] = useState('')
    let [isDisplayStatucChange, setIsDisplayStatucChange] = useState(false)
    let [isDisplayCountryChange, setIsDisplayCountryChange] = useState(false)
    let isLoading: boolean = useSelector((state: AppStateType) => {// @ts-ignore
        return state.profilePage.isLoading
    })
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserProfileThunk())
    }, [])
    let profile: any = useSelector<any>((state: AppStateType) => {
        // @ts-ignore
        return state.profilePage.profile
    })
    let posts: Array<postsType> = useSelector((state: AppStateType) => {
        // @ts-ignore
        return state.profilePage.posts
    })
    let [status, setStatus] = useState('')
    if (isLoading) {
        !isLoading && setstatusOnstatus(profile[0].status)
        !isLoading && setCountry(profile[0].country)
        return <UserProfileLoader/>
    } else {
        return (
            <div className="container sup">
                <div className="profile">
                    <section className="profile__page">
                        <div className="profile__info">
                            <div className="profile__img"><img className="profile__item__img"
                                                               src={`http://localhost:8000${profile[0].userPhotos}`}/>
                            </div>
                            <div className="profile__names w-100">
                                <p className="profile__names__item username">{profile[0].full_name}</p>
                                <div className="profile__user__detail">

                                    {isShowAll ? <div className={`animate__animated animate__fadeIn`}>
                                        <div className="profile__user__detail__property d-flex" onClick={(e) => {

                                        }}>year: <p
                                            className="profile__user__detail__item__text"
                                        >{profile[0].year}</p></div>

                                    </div> : <></>}
                                    <div className={'status_field_change d-flex'} style={{
                                        display: isDisplayStatucChange ? 'block' : 'none',
                                        zIndex: 999999999999999999999999999999999,
                                        position: isDisplayStatucChange ? 'absolute' : 'relative',
                                        visibility: isDisplayStatucChange ? 'visible' : 'hidden',
                                    }}><input className={'status_field_change_item'} value={status} onChange={(e) => {
                                        setStatus(e.target.value)
                                    }}/>
                                        <div onClick={(e) => {
                                            setIsDisplayStatucChange(false)
                                        }} className={'status_field_change_item_btn'}><p
                                            className={'status_field_change_item_btn_text'} onClick={() => {
                                            setstatusOnstatus(status)
                                            dispatch(setStatusUserThunk(status))
                                        }}>submit</p></div>
                                    </div>
                                    <div className="profile__user__detail__property d-flex" onClick={(e) => {
                                        setStatus(profile[0].status)
                                        setIsDisplayStatucChange(true)
                                    }} style={{display: isDisplayStatucChange ? 'none' : 'flex'}}>status: <p
                                        className="profile__user__detail__item__text">{
                                        isDisplayStatucChange ? <></> : profile[0].status}</p></div>
                                    <div className="profile__user__detail__property d-flex" onClick={(e) => {
                                        setIsDisplayCountryChange(true)
                                    }}>country: <p
                                        className="profile__user__detail__item__text"
                                        style={{display: isDisplayCountryChange ? 'none' : 'flex'}}>{profile[0].country}

                                    </p></div>
                                    <div style={{
                                        display: isDisplayCountryChange ? 'flex' : 'none',
                                        zIndex: 999999999999999999999999999999999999
                                    }}>
                                        <select onClick={(e) => {
                                            //@ts-ignore
                                            setCountry(e.target.value)
                                        }} style={{zIndex: 9999999999999999999999999999999999999999999999999}}>
                                            <option value={' '}></option>
                                            <option value={'Vologda'}>Vologda</option>
                                            <option value={'Piter'}>Piter</option>
                                        </select>
                                        <div className={'button_change_country'} onClick={(e) => {
                                            if (country == '') {
                                                alert('выбирете город')
                                            } else {
                                                setIsDisplayCountryChange(false)
                                                dispatch(setCountryUserThunk(country))
                                            }
                                        }}><p className={'button_change_country_btn_text'}>submit</p></div>
                                    </div>
                                    <div className="profile__show__all" onClick={() => {
                                        setIsShowAll(!isShowAll)
                                    }}>
                                        <div
                                            className="profile__show__button__item">{isShowAll ? 'close' : 'show all'}</div>


                                    </div>
                                    <div key={0} className={'form_post'}>{showForm ?
                                        <AddPostForm key={1} setShowForm={setShowForm} showForm={showForm}/> :
                                        <p onClick={() => {
                                            setShowForm(true)
                                        }}>create post</p>}</div>

                                    {
                                        Array.from(posts).map((post:postsType, i: number) => {
                                        return <div className="post" key={i}>

                                                <div className=""><img className="user__photo"
                                                                       src={`http://localhost:8000${post.user.userPhotos}`}/>
                                                </div>
                                                <div className="usernamePost">{post.user.first_name}</div>
                                                <div className="data-time">
                                                    <div>{post.date}</div>
                                                </div>
                                                <div style={{marginTop: '60px', width: '100px'}}><p
                                                    style={{marginLeft: '-80px'}}>{post.editMode ? <><input
                                                    style={{zIndex: 9 * 9 ** 99}} className={'form-control w-100'}
                                                    value={editModePost.des} onChange={(e) => {
                                                    setEditModePost({...editModePost, des: e.target.value})
                                                }}/></> : post.des}</p></div>
                                                <div className="post__post w-100">{post.editMode ? <><input
                                                    type={'file'} onChange={(e) => {
                                                    // @ts-ignore
                                                    setImagePostEdit(e.target.files[0])
                                                }} style={{marginTop: '20px'}}/></> : post.image ?
                                                    <img className={'post__image'}
                                                         src={`http://localhost:8000${post.image}`}/> : <></>}
                                                    <div className={'post__menu'}>
                                                        <div className={'post__menu_item'}></div>
                                                    </div>
                                                    <Like user_id={profile[0].id} likes_count={post.likes_count} likes={post.like} post_id={post.id}/>
                                                    <div className={'post__edit_btn'} data-id={post.id}>
                                                        <button onClick={(e) => {
                                                            setEditModePost({
                                                                des: post.des,
                                                                image: `http://localhost:8000${post.image}`
                                                            })
                                                            setClientX(post.id)
                                                            // @ts-ignore
                                                            if (clientX == inputEl.current.getAttribute('data-x', '')) {
                                                                post.editMode = true
                                                            }
                                                            // clientX == data-x -- if
                                                            // @ts-ignore
                                                            console.log(inputEl.current.getAttribute('data-x', ''))
                                                        }} ref={inputEl} data-x={clientX} type="button"
                                                                className="btn btn-secondary">edit post
                                                        </button>
                                                    </div>
                                                    {post.editMode || isAnswer ? <></> : <><input
                                                        placeholder={'add comment'}
                                                        onChange={(e) => {
                                                            setTextReviews(e.target.value)
                                                        }}/>
                                                        <button onClick={() => {
                                                            dispatch(createCommentThunk(textReviews, null, post.id))
                                                        }}>submit
                                                        </button>
                                                    </>}
                                                    <div style={{marginBottom: '200px'}}>
                                                        {post.reviews && !post.editMode ?
                                                            post.reviews.map((comment: reviewsType, i: number) => {
                                                                return <div style={{position: 'relative'}} key={i}>
                                                                    {comment.parent_id ?
                                                                        <div style={{marginLeft: '25px'}}>
                                                                            <CommentPost
                                                                                userName={comment.user.first_name}
                                                                                textComment={comment.text}
                                                                                avatar={`http://localhost:8000${comment.user.userPhotos}`}
                                                                                id={comment.id}
                                                                                post_id={post.id}
                                                                                parent_id={comment.parent_id}
                                                                                answer_clickFn={answer_clickFn}
                                                                            > </CommentPost>
                                                                        </div> :
                                                                        <CommentPost userName={comment.user.first_name}
                                                                                     textComment={comment.text}
                                                                                     avatar={`http://localhost:8000${comment.user.userPhotos}`}
                                                                                     id={comment.id}
                                                                                     post_id={post.id}
                                                                                     parent_id={comment.parent_id}
                                                                                     answer_clickFn={answer_clickFn}
                                                                        />}

                                                                </div>
                                                            })
                                                            : <></>}{isAnswer ?
                                                        <div><input value={textReviews} onChange={(e) => {
                                                            setTextReviews(e.target.value)
                                                        }}/>
                                                            <button onClick={() => {

                                                                setTextReviews('')
                                                                setIsAnswer(false)
                                                                dispatch(createCommentThunk(textReviews, null, localStorage.getItem('post_id'), parent_id))
                                                            }}>submit
                                                            </button>
                                                        </div> : ''}
                                                        {
                                                            post.editMode ? <div className={'d-flex'}>
                                                                <div onClick={() => {
                                                                    post.editMode = false
                                                                    forceUpdate()
                                                                }}>cancel
                                                                </div>
                                                                <div style={{marginLeft: '15px'}} onClick={() => {
                                                                    post.editMode = false
                                                                    dispatch(editPostThunk(post.id, editModePost.des, imagePostEdit))
                                                                }}>save
                                                                </div>
                                                            </div> : <>
                                                                <div style={{marginBottom: '100px'}} onClick={() => {
                                                                    dispatch(deletePostThunk(post.id))
                                                                }} className={'post__delete_btn'}><p
                                                                    className={'post__delete_btn_text'}>delete post</p>
                                                                </div>
                                                            </>}
                                                    </div>


                                                </div>

                                            </div>


                                    })}

                                </div>

                            </div>

                        </div>
                    </section>


                </div>
            </div>


        )
    }
})

export {UserProfile}