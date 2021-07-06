import React from 'react'
import {Dropdown} from "react-bootstrap";
import userDefault from '../../static/userPhotoDefault.png'

const Friend = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'friend col-11'}>
                    <div className={'d-flex friend__container'}>
                        <div className={'friend__search w-100'}>
                            <input placeholder={'search friend'} className={'form-control friend__search_item'}/>
                        </div>
                        <Dropdown title={'Dropdown'} >
                        <div className={'friend__button w-100'}>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <div className={'friend__button_item profile__show__button__item'}>settings</div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                        </div>
                        </Dropdown>
                    </div>
                    <div className={'friend__list'}>
                        <div className={'friend__list_img'}>
                            <div className={'d-flex'}>
                                <img className={'friend__list_img_item'} src={userDefault}/>
                                <div className={'usernamePost'}>arsenii</div>
                            </div>
                            <div className={'friend__list_detail'}>
                                <div className={'friend__list_detail_item'}>country:</div>
                                <div className={'friend__button_del_wri'}>
                                    <div className={'friend__button_del_wri_write'}>write</div>
                                    <div className={'friend__button_del_wri_delete'}>delete</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr />

                </div>
            </div>

        </div>
    )
}

export {Friend}