import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ allowRoles }) => {
    const location = useLocation();
    const user = localStorage.getItem('users');
    const userObj = JSON.parse(user);

    if (!userObj || !userObj.role || !Array.isArray(userObj.role)) {
        <Navigate to='/login' state={{ from: location }} replace />
        var userArr = userObj ? [userObj.role] : [];
    
    }

    const isAllowed = userArr.find(role => allowRoles?.includes(role));

    return isAllowed ? <Outlet /> : <Navigate to='/unauthorized' state={{ from: location }} replace />;
};

export default ProtectedRoutes;
