import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="Header">
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home &nbsp;</Link>
            <Link to="/post"> Post &nbsp;</Link>
            <Link to="/user"> Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
