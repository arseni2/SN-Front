import React from 'react'

const SignUp = () => {
    return (
        <div className={'up w-100'}>
            <div className={'up__up'}>
                <div className={'up__title'}>
                    Sign Up
                </div>
                <div className={'up__forms'}>
                    <input placeholder={'name'} className={'form-control up__forms_item'}/>
                    <input placeholder={'password'} type={'password'} className={'form-control up__forms_item'}/>
                    <input placeholder={'last name'} type={'password'} className={'form-control up__forms_item'}/>
                    <input placeholder={'email'} type={'email'} className={'form-control up__forms_item'}/>
                </div>
            </div>
            <div className={'up__submit_btn'}><p className={'up__submit_btn_text'}>sign up</p></div>
        </div>
    )
}

export {SignUp}