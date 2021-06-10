import React, {Dispatch, SetStateAction, useState} from 'react'
import image_add_icon from "../../static/image_add_icon_2.png";
import 'animate.css'
import {createPostThunk} from "../../redux/profileReducer";
import {useDispatch} from "react-redux";

type PropsType = {
    showForm: boolean
    setShowForm: (Dispatch<SetStateAction<boolean>>)
}

const AddPostForm = (props: PropsType) => {
    let dispatch = useDispatch()
    let [image, setImage] = useState(null)
    let [text, setText] = useState('')
    let animation = 'animate__animated animate__lightSpeedInLeft'
    let animation_out = 'animate__animated animate__lightSpeedOutLeft'
        return <>
            <div className={`add_post ${props.showForm ? animation : animation_out}`}>
                <div className={'d-flex '}>
                    <div className={'feed__search d-flex w-100'}><input placeholder={'add post...'}
                                                                       className={'feed__search_item form-control'} value={text} onChange={(e) => {
                        setText(e.target.value)
                    }}/>
                        <div className={'feed__icons'}>
                            <div className={'feed__icons_item'}>
                                <label className="filebutton" style={{width: '60px'}}>
                                    <img width={'50px'} height={'50px'} src={image_add_icon}/>
                                    <input type="file" name="myfile" onChange={(e) => {
                                        //@ts-ignore
                                        setImage(e.target.files[0])
                                    }}/>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={'add_form__btn'}>
                        <div onClick={() => {
                            if(!text){
                                alert('введите текст')
                            }else{
                                dispatch(createPostThunk(text, image))
                            }
                            props.setShowForm(false)
                        }} className={'add_form__btn_item'}><p className={'add_form__btn_item_text'}>add post</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
}

export {AddPostForm}