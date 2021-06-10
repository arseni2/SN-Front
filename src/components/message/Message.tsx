import React from 'react'
import userDefaultImage from '../../static/userPhotoDefault.png'
const Message = () => {

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-11 message__page'}>
                    <div className={'message__message'}>
                        <div className={'d-flex'}>
                            <img width={'70px'} height={'70px'} src={userDefaultImage}/>
                            <div className={'usernamePost'}>Arsenii</div>
                            <div className={'message__owner__last_message'}>
                                <img className={'message__owner__last_message_item_img'} width={'40px'} height={'40px'} src={userDefaultImage}/>
                                <div>last message</div>
                            </div>
                        </div>

                    </div>
                    <hr/>

                </div>
            </div>
        </div>
    )
}

export {Message}