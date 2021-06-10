import {SideBar} from "./components/sidebar/SideBar";
import {Header} from "./components/header/Header";
import {UserProfile} from "./components/userProfile/UserProfile";
import React from "react";
import {Route,} from 'react-router-dom'
import {Music} from "./components/music/Music";
import {News} from "./components/news/News";
import {Friend} from "./components/friends/Friend";
import {Message} from "./components/message/Message";
import {SignUp} from "./components/auth/signUp/SignUp";
import {SignIn} from "./components/auth/signIn/SignIn";

function App() {
    return (
        <>
            <Route exact path={'/'}>
                <>
                    <Header key={13}/>
                    <SideBar key={12}/>
                    <UserProfile key={11}/>
                </>
            </Route>
            <Route exact path={'/music'}>
                <>
                    <Header key={10}/>
                    <SideBar key={9}/>
                    <Music key={8}/>
                </>
            </Route>
            <Route exact path={'/feed'}>
                <>
                    <Header key={7}/>
                    <SideBar key={6}/>
                    <News key={5}/>
                </>
            </Route>
            <Route exact path={'/friend'}>
                <>
                    <Header key={2}/>
                    <SideBar key={3}/>
                    <Friend key={4}/>
                </>
            </Route>
            <Route exact path={'/message'}>
                <>
                    <Header key={14}/>
                    <SideBar key={15}/>
                    <Message key={16}/>
                </>
            </Route>
            <Route exact path={'/signup'} component={SignUp}/>
            <Route exact path={'/signin'} component={SignIn}/>
        </>
    );
}

export default App;
