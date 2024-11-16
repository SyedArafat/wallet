import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {ForcedNoRequireAuth} from "./auth/Auth";
import Register from "./pages/Register";
import PrivateOutlet from "./auth/PrivateOutlet";
import ForgetPassword from "./pages/ForgetPassword";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import MyAccount from "./pages/MyAccount";
import Cards from "./pages/Cards";
import ChangePassword from "./pages/ChangePassword";
import ConfirmPasswordChange from "./pages/ConfirmPasswordChange";
import SettingPage from "./pages/SettingPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/login"
                       element={
                           <ForcedNoRequireAuth>
                               <Login/>
                           </ForcedNoRequireAuth>
                       }/>/>

                <Route exact path="/" element={<Index/>}/>/>

                <Route exact path="/register"
                       element={
                           <ForcedNoRequireAuth>
                               <Register/>
                           </ForcedNoRequireAuth>
                       }/>/>
                />

                <Route exact path="/forgot-password"
                       element={
                           <ForcedNoRequireAuth>
                               <ForgetPassword/>
                           </ForcedNoRequireAuth>
                       }/>/>
                />

                <Route path={"/*"} element={<PrivateOutlet/>}>
                    <Route exact path="home" element={<Home/>}/>
                    <Route exact path="profile" element={<Profile/>}/>
                    <Route exact path="my-account" element={<MyAccount/>}/>
                    <Route exact path="cards" element={<Cards/>}/>
                    <Route exact path="change-password" element={<ChangePassword/>}/>
                    <Route exact path="confirm-password-change" element={<ConfirmPasswordChange/>}/>
                    <Route exact path="settings" element={<SettingPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;