import {Outlet} from "react-router-dom";
import {RequireAuth} from "./Auth";

export default function PrivateOutlet() {
    return (
        <RequireAuth > <Outlet /> </RequireAuth>
        // Authenticated() ? <Outlet /> : <Navigate to='/login' />
    );
}