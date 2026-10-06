import { Navigate, Outlet } from "react-router";

//profile, cart pages
export const PrivateRoute = () => {
  const isLoggedin = localStorage.getItem("user");
  if (isLoggedin) {
    return <Outlet />; // allow child route
  }
  return <Navigate to="/login" replace={true} />; // redirect to login
};

//login, signup pages
export const ProtectedRoute = () => {
  const isLoggedin = localStorage.getItem("user");
  if (isLoggedin) {
    return <Navigate to="/products" replace={true} />;
  }
  return <Outlet />;
};
