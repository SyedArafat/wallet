import React, {useEffect} from 'react';
import feather from 'feather-icons';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {ForcedNoRequireAuth} from "./auth/Auth";
import Register from "./pages/Register";
import PrivateOutlet from "./auth/PrivateOutlet";
import ForgetPassword from "./pages/ForgetPassword";
import Index from "./pages/Index";

// Import other components as needed

function App() {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <div className="App">
            <Routes>
                <Route exact path="/login"
                       element={
                           <ForcedNoRequireAuth>
                               <Login/>
                           </ForcedNoRequireAuth>
                       }/>/>

                <Route exact path="/" element={<Index />}/>/>

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
                </Route>
            </Routes>
        </div>
    );
}

export default App;