import {Skeleton} from 'antd'
import React from 'react'

const UserProfileLoader = () => {
    return (<>
        <div className="container sup">
            <div className="profileLoader">
                <section className="profile__page">
                    <div className="profile__info">
                        <div style={{marginLeft: '0px'}}><Skeleton.Avatar style={{height: '127px', width: '140px'}} active={true} size={'large'}
                                                                          shape={'square'}/></div>

                        <div style={{display: 'block'}}>
                            <div style={{marginLeft: '30px', marginTop: '5px'}}><Skeleton.Input style={{width: 200}} active={true}
                                                                              size={'default'}/></div>
                            <div style={{marginLeft: '30px', marginTop: '10px'}}><Skeleton.Input style={{width: 200}} active={true}
                                                                              size={'default'}/></div>
                            <div style={{marginLeft: '30px', marginTop: '10px'}}><Skeleton.Input style={{width: 200}} active={true}
                                                                              size={'default'}/></div>
                        </div>
                    </div>
                    <div style={{marginTop: '50px', marginLeft: '130px'}}>
                        <div style={{display: 'flex'}}>
                        <Skeleton.Avatar style={{width: '68px', height: '75px'}} active={true} size={'default'} shape={'square'} />
                        <div style={{marginLeft: '20px'}}><Skeleton.Input style={{ width: 200 }} active={true} size={'default'} /></div></div>
                        <div style={{display: 'block', marginLeft: '89px', marginTop: '-31px'}}>
                            <Skeleton.Button active={true} size={'default'} shape={'square'} />
                        </div>
                        <div style={{marginTop: '15px'}}><Skeleton.Input style={{width: 200}} active={true}
                                        size={'default'}/></div>
                        <Skeleton.Image style={{width: '450px', height: '251px'}} />
                    </div>
                </section>
            </div>
        </div>
    </>)
}

export default UserProfileLoader