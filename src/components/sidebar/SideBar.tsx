import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import '../../static/style.css'
import {AppStateType} from "../../redux/store";
import {actions} from "../../redux/initialReducer";


const SideBar: React.FC<any> = () => {
    let dispatch = useDispatch()
    let history = useHistory();
    let url = history.location.pathname
    let currentUrl = useSelector((state: AppStateType) => state.initialPage.url)
    return (
        <div className="container">
            <div className="test">
                <section className="col-md-2 sidebar">
                    <div className="sidebar__menu__item">
                        <Link style={{ textDecoration: 'none' }} to={'/message'}><p onClick={(e)=>{
                            dispatch(actions.switchUrl('/message'))
                        }} className={`sidebar__menu_item${currentUrl === '/message' ? ' active' : ''}`}>Message</p></Link>
                        <Link style={{ textDecoration: 'none' }} to={'/'}><p onClick={(e)=>{
                            dispatch(actions.switchUrl('/'))
                        }} className={`sidebar__menu_item${currentUrl === '/' ? ' active' : ''}`}>profile</p></Link>
                        <Link style={{ textDecoration: 'none' }} to={'/music'}><p onClick={(e)=>{
                            dispatch(actions.switchUrl('/music'))
                        }} className={`sidebar__menu_item${currentUrl === '/music' ? ' active' : ''}`}>music</p></Link>
                        <Link style={{ textDecoration: 'none' }} to={'/friend'}><p onClick={(e)=>{
                            dispatch(actions.switchUrl('/friend'))
                        }} className={`sidebar__menu_item${currentUrl === '/friend' ? ' active' : ''}`}>friends</p></Link>
                        <Link style={{ textDecoration: 'none' }} to={'/feed'}><p onClick={(e)=>{
                            dispatch(actions.switchUrl('/feed'))
                        }} className={`sidebar__menu_item${currentUrl === '/feed' ? ' active' : ''}`}>news</p></Link>
                    </div>

                </section>
            </div>
        </div>

    )
}

export {SideBar}