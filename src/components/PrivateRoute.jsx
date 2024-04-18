import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectUserIsRefreshing,
  selectUserIsSignedIn,
} from "../redux/auth/selectors";
const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);
  return !isSignedIn && !isRefreshing ? (
    <Navigate to={redirectTo} replace />
  ) : (
    Component
  );
};

export default PrivateRoute;
