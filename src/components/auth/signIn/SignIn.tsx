import React from 'react'

const SignIn = () => {
    return (
        <div className={'up w-100'}>
            <div className={'up__up'}>
                <div className={'up__title'}>
                    Sign In
                </div>
                <div className={'up__forms'}>
                    <input placeholder={'password'} type={'password'} className={'form-control up__forms_item'}/>
                    <input placeholder={'email'} type={'email'} className={'form-control up__forms_item'}/>
                </div>
            </div>
            <div className={'up__submit_btn_signin'}><p className={'up__submit_btn_text'}>sign in</p></div>
        </div>
    )
}

export {SignIn}