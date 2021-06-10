import React from 'react'

const Music = () => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-11 music_page'}>
                    <div className={'d-flex'}>
                        <div className={'music__search'}>
                            <input className={'form-control'} placeholder={'search...'}/>
                        </div>
                        <div className={'music__select'}><select className={'form-select music__select_item'}>
                            <option selected>One</option>
                            <option value="1">Two</option>
                        </select></div>
                        <div className={'music__button'}>
                            <div className={'music__button_item profile__show__button__item'}>search</div>
                        </div>
                    </div>
                    <hr/>
                    <div className={'music__items'}>
                        <div className={'music__item_logo'}>

                        </div>
                        <div className={'music__column'}>
                            <div className={'music__item_name'}>arsenii</div>
                            <div className={'music__item_musicname'}>test name</div>
                        </div>
                        <div className={'music__items__time w-100'}>
                            <div className={'music__item_time'}>4:05</div>
                        </div>
                    </div>
                    <hr/>

                </div>

            </div>
        </div>
    )
}
export {Music}