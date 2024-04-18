import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations.js";
import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { apiRefreshUser } from "./redux/auth/operations.js";
import { RestrictedRoute } from "./components/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { selectUserIsRefreshing } from "./redux/auth/selectors.js";
import { Layout } from "./components/Layout.jsx";
const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserIsRefreshing);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
