import classNames from "classnames";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/twitter.svg";
import { logout } from "../../auth/service";
import AuthContext from "../../auth/_back/00_context";
import Button from "../../commons/Button";

const Header = () => {
  const { isLogged, handleLogout: onLogout } = useContext(AuthContext);
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
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/tweets/new"
                className={classNames("nav-link", {})}
                // className={classNames("nav-link", (isDisabled) =>
                //   isDisabled ? { color: "red" } : ""
                // )}
              >
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
