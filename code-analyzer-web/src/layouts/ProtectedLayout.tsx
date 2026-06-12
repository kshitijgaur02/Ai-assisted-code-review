import { Outlet, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedLayout = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-blue-600">
              AI Code Analyzer
            </h1>

            <div className="flex gap-4">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-blue-600"
                    : "text-gray-600"
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/analyze"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-blue-600"
                    : "text-gray-600"
                }
              >
                Analyze
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {user?.picture && (
              <img
                src={user.picture}
                alt={user.name}
                className="h-10 w-10 rounded-full"
              />
            )}

            <div>
              <p className="text-sm font-medium">
                {user?.name}
              </p>

              <p className="text-xs text-gray-500">
                {user?.email}
              </p>
            </div>

            <button
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: window.location.origin,
                  },
                })
              }
              className="
                rounded-md
                bg-red-600
                px-4
                py-2
                text-sm
                font-medium
                text-white
                hover:bg-red-700
              "
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;