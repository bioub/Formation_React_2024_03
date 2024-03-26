import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/hello/Romain">Hello</Link>
        <Link to="/todos">Todos</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
