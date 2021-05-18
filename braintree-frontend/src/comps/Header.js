import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IconButton } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
const Header = ({ history }) => {
  console.log(history);
  const getActive = (current) => {
    if (history.location.pathname === current) {
      return "white";
    }
  };
  return (
    <div className="header">
      <Link style={{ color: getActive("/home") }} to="/home">
        Home
      </Link>
      <Link to="/cart">
        <IconButton>
          <AddShoppingCartIcon style={{ color: getActive("/cart") }} />
        </IconButton>
      </Link>
    </div>
  );
};

export default withRouter(Header);
