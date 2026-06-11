import {
  Link,
  Outlet,
} from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside
        className="
          w-64
          border-r
          border-slate-800
          p-4
        "
      >
        <h2
          className="
            mb-6
            text-xl
            font-bold
          "
        >
          Developer Copilot
        </h2>

        <nav
          className="
            flex
            flex-col
            gap-3
          "
        >
          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/analyze">
            Analyze
          </Link>
        </nav>
      </aside>

      <main
        className="
          flex-1
          p-8
        "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;