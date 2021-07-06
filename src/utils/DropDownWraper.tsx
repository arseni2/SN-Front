import {Dropdown} from "react-bootstrap";
import React from "react";
import {actions} from "../redux/profileReducer";
import {useDispatch} from "react-redux";

const DropDownWrapper = (props:any) => {
    let dispatch = useDispatch()
    return (
        <Dropdown title="Drop right" drop={'right'}>
            <Dropdown.Toggle variant="" id="dropdown-basic">

                {props.children}
            </Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
                <Dropdown.Item bsPrefix={'delete_drop'}><div onClick={(e) => {
                    //console.log(props.id)
                    //console.log(props.post_id)
                    dispatch(actions.deleteReviewsRequest(props.post_id, props.id))
                }}>Delete</div></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDownWrapper