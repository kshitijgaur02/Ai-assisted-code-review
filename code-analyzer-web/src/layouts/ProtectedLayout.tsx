import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedLayout = () => {
  const {
    user,
    logout,
  } = useAuth0();

  return (
    <div className="min-h-screen">
      <nav
        className="
          flex
          items-center
          justify-between
          border-b
          px-6
          py-4
        "
      >
        <div className="flex gap-6">
          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/analyze">
            Analyze
          </Link>
        </div>

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <span>
            {user?.name}
          </span>

          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo:
                    window.location.origin,
                },
              })
            }
            className="
              rounded-md
              bg-red-600
              px-4
              py-2
              text-white
              hover:bg-red-700
            "
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;