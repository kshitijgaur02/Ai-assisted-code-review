import { Navigate }
  from "react-router-dom";

const HomeRedirect = () => {
  const isAuthenticated =
    !!localStorage.getItem(
      "token"
    );

  return (
    <Navigate
      to={
        isAuthenticated
          ? "/dashboard"
          : "/login"
      }
      replace
    />
  );
};

export default HomeRedirect;