import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/twitter.svg";
import { authLogout } from "../../store/actions";
import { getIsLogged } from "../../store/selectors";
import Button from "../commons/Button";

const Header = () => {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(authLogout());

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
