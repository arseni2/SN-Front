import React from 'react'
import UserPhotoDefault from "../../static/userPhotoDefault.png";
import image_add_icon from "../../static/image_add_icon_2.png";

const News = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'feed col-11'}>
                    <div className={'d-flex'}>
                        <div className={'feed__search d-flex w-75'}><input placeholder={'add post...'}
                                                                           className={'feed__search_item form-control'}/>
                            <div className={'feed__icons'}>
                                <div className={'feed__icons_item'}>
                                    <label className="filebutton">
                                        <img width={'50px'} height={'50px'} src={image_add_icon}/>
                                        <input type="file" id="myfile" name="myfile" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={'feed__button'}>
                            <div className={'feed__button_item profile__show__button__item'}>add post</div>
                        </div>
                    </div>
                    <div className={'for_post_pos w-100'}>
                        <div className="feed__post w-100">
                            <div className=""><img className="user__photo" src={UserPhotoDefault}/></div>
                            <div className="usernamePost">arsenii</div>
                            <div className="date-font date__post">
                                <div>16.08</div>
                            </div>
                            <div className="post__image"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {News}