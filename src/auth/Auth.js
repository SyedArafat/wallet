import {Navigate, useLocation} from "react-router-dom";
import {EXPIRES_AT_TAG, NAME_TAG, TOKEN_TAG} from "../config/config";

const GetToken = () => {return localStorage.getItem(TOKEN_TAG);}
const SetToken = (token, name, expiresAt) => {
    localStorage.setItem(TOKEN_TAG, token);
    localStorage.setItem(NAME_TAG, name);
    localStorage.setItem(EXPIRES_AT_TAG, expiresAt);
}

const GetName = () => {
    return localStorage.getItem(NAME_TAG);
}

const DeleteToken = () => {
    SetToken(null, null, null);
}

const  Authenticated = () => {
    return true;
    return !!(GetToken() !== null && GetToken().length > 10);
}

const RequireAuth = ({children}) => {
    const location = useLocation();
    return Authenticated() === true ? children : <Navigate to="/login" state={location} />;
}

const ForcedNoRequireAuth = ({children}) => {
    return Authenticated() === false ? children : <Navigate to="/home" replace />;
}

export {
    RequireAuth,
    ForcedNoRequireAuth,
    Authenticated,
    GetToken,
    SetToken,
    DeleteToken,
    GetName
}
