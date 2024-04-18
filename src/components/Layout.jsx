import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar.jsx";
import { Audio } from "react-loader-spinner";

export const Layout = () => {
  return (
    <>
      <AppBar />
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
        <Outlet />
      </Suspense>
    </>
  );
};
