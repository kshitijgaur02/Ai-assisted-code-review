import {
  useNavigate,
} from "react-router-dom";

const LoginPage = () => {
  const navigate =
    useNavigate();

  const handleLogin =
    () => {
      localStorage.setItem(
        "token",
        "demo"
      );

      navigate(
        "/dashboard"
      );
    };

  return (
    <button
      onClick={handleLogin}
    >
      Login
    </button>
  );
};

export default LoginPage;