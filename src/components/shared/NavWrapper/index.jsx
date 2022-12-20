import { Link, Outlet } from "react-router-dom";

const NavWrapper = () => (
  <>
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Outlet />
  </>
);

export default NavWrapper;
