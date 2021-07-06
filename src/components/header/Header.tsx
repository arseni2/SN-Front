import React from 'react'
import '../../static/style.css'
import logo_test from '../../static/logo_test.svg'
import userPhotoDefault from '../../static/userPhotoDefault.png'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import {Dropdown} from "react-bootstrap";

const Header = () => {
    return (
        <header className="col-8 header">
            <div className="container">
                <div className="row left">
                    <div className="slug col-3">sketch bones</div>
                    <div className="col-1 logo"><img src={logo_test}/></div>
                    <div className="col-3 searchUser">
                        <input className="form-control searchUser__input" id="exampleDataList"
                               placeholder="search user"/>
                    </div>
                    <div className="col-1 username">arsenii</div>
                    <div className={'dropdown__user'}>
                        <Dropdown title="Dropdown">
                            <Dropdown.Toggle variant="" id="dropdown-basic">

                                <div className="col-2"><img className="user__photo" src={userPhotoDefault}/></div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>

        </header>
    )
}

export {Header}