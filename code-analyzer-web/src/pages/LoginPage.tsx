import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const {
    loginWithRedirect,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  if (isLoading) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-slate-950
          text-slate-100
        "
      >
        Loading...
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >
      <div
        className="
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          lg:grid-cols-2
        "
      >
        {/* Left Side */}

        <div
          className="
            flex
            flex-col
            justify-center
            px-8
            py-12
            lg:px-16
          "
        >
          <p
            className="
              mb-4
              text-sm
              font-medium
              uppercase
              tracking-wider
              text-blue-400
            "
          >
            AI-Powered Developer Tool
          </p>

          <h1
            className="
              mb-6
              text-5xl
              font-bold
              leading-tight
            "
          >
           Code Analyzer
          </h1>

          <p
            className="
              mb-8
              max-w-xl
              text-lg
              text-slate-300
            "
          >
            Analyze source code, identify
            issues, discover improvements,
            and maintain a searchable history
            of AI-powered reviews.
          </p>

          <div
            className="
              mb-10
              space-y-4
            "
          >
            <div>
              ✓ AI Code Reviews
            </div>

            <div>
              ✓ Security & Quality Checks
            </div>

            <div>
              ✓ Improvement Suggestions
            </div>

            <div>
              ✓ Copyable Code Fixes
            </div>

            <div>
              ✓ Secure Analysis History
            </div>
          </div>

          <button
            onClick={() =>
              loginWithRedirect()
            }
            className="
              w-fit
              rounded-lg
              bg-blue-600
              px-6
              py-3
              font-medium
              transition
              hover:bg-blue-500
            "
          >
            Login with Auth0
          </button>
        </div>

        {/* Right Side */}

        <div
          className="
            hidden
            items-center
            justify-center
            p-10
            lg:flex
          "
        >
          <div
            className="
              w-full
              max-w-xl
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              p-6
              shadow-2xl
            "
          >
            <div
              className="
                mb-4
                flex
                items-center
                gap-2
              "
            >
              <div
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-red-500
                "
              />

              <div
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-yellow-500
                "
              />

              <div
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-green-500
                "
              />
            </div>

            <pre
              className="
                overflow-auto
                text-sm
                text-slate-300
              "
            >
{`function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
}`}
            </pre>

            <div
              className="
                mt-6
                rounded-lg
                border
                border-amber-500/20
                bg-amber-500/10
                p-4
              "
            >
              <p className="font-medium">
                Issue Found
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-300
                "
              >
                Missing React key prop inside
                list rendering.
              </p>
            </div>

            <div
              className="
                mt-4
                rounded-lg
                border
                border-green-500/20
                bg-green-500/10
                p-4
              "
            >
              <p className="font-medium">
                Suggested Improvement
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-300
                "
              >
                Add a unique key prop to each
                rendered item.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;