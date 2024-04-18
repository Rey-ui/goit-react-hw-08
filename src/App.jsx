import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations.js";
import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import AppBar from "./components/AppBar";
import { apiRefreshUser } from "./redux/auth/operations.js";
import { RestrictedRoute } from "./components/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { selectUserIsRefreshing } from "./redux/auth/selectors.js";
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
  return (
    <AppBar>
      <Suspense
        fallback={
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        }
      >
        {isRefreshing ? (
          <b>Refreshing user...</b>
        ) : (
          <Routes>
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
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </Suspense>
    </AppBar>
  );
}

export default App;
