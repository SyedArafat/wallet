import React, {useEffect} from 'react';
import feather from 'feather-icons';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {ForcedNoRequireAuth} from "./auth/Auth";
import Register from "./pages/Register";
import PrivateOutlet from "./auth/PrivateOutlet";

// Import other components as needed

function App() {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <div className="App">
            <Routes>
                {/*<Route exact path={"/"} element={<RequireAuth> <Home/> </RequireAuth>} />*/}
                {/*<Route path={"/logout"} element={<Logout/>} exact/>*/}

                <Route exact path="/login"
                       element={
                           <ForcedNoRequireAuth>
                               <Login/>
                           </ForcedNoRequireAuth>
                       }/>/>

                <Route exact path="/register"
                       element={
                           <ForcedNoRequireAuth>
                               <Register />
                           </ForcedNoRequireAuth>
                       }/>/>
                />

                <Route path={"/*"} element={<PrivateOutlet />}>
                    <Route exact path="" element={<Home/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;