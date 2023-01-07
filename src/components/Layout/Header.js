import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/twitter.svg";
import { useAuth } from "../auth/context";
import { logout } from "../auth/service";
import Button from "../commons/Button";

const Header = () => {
  const { isLogged, handleLogout: onLogout } = useAuth();
  const handleLogout = () => {
    logout();
    onLogout();
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link to="/" className="navbar-brand">
          <Icon width="32px" />
        </Link>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/tweets/new" className={classNames("nav-link", {})}>
                New tweet
              </NavLink>
            </li>
            <li>
              <NavLink to="/tweets" className={classNames("nav-link", {})} end>
                See all tweets
              </NavLink>
            </li>
          </ul>
        </div>
        {!isLogged ? (
          <Button as={Link} to="/login">
            Login
          </Button>
        ) : (
          <Button onClick={handleLogout}>logout</Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
