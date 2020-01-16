import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="navItem">
          <NavLink to="/" exact>
            Home
          </NavLink>
        </div>
        <div className="navItem">
          <NavLink to="/cellar" exact>
            My Cellar
          </NavLink>
        </div>
        <div className="navItem">
          <NavLink to="/wineries" exact>
            Wineries
          </NavLink>
        </div>
        <div className="navItem">
          <NavLink to="/bottles" exact>
            Bottles
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;