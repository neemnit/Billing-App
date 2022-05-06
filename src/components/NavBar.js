import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "../Register";
import Box from "@mui/material/Box";

import Bill from "./Bill/Bill";
import "./nav.css";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import PrivateRoute from "../helper/PrivateRoute";
import ProductsContainer from "./Product/ProductsContainer";
import CustomersContainer from "./Customer/CustomersContainer";
const NavBar = (props) => {
  const { loggedIn, handleAuth } = props;
  const preventDefault = (event) => event.preventDefault();
  return (
    <div>
      <div className="box">
       
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            typography: "body1",
            "& > :not(style) + :not(style)": {
              ml: 12,
            },
          }}
          onClick={preventDefault}
        >
          <Link to="/"> Home </Link>
          {loggedIn ? (
            <React.Fragment>
              <Link to="/dashboard">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dashboard
              </Link>
              <Link to="/profile"> &nbsp; &nbsp; &nbsp; &nbsp;Profile</Link>
              <Link to="/customer"> &nbsp; &nbsp; &nbsp;Customers</Link>

              <Link to="/products"> &nbsp; &nbsp; &nbsp; &nbsp;Products</Link>

              <Link to="/bills"> &nbsp; &nbsp; &nbsp; &nbsp;Bills</Link>
              <Link
                to="/"
                onClick={() => {
                  localStorage.removeItem("token");
                  handleAuth();
                }}
              >
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp;Log out
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {" "}
              <Link to="/register"> &nbsp; &nbsp;Register </Link>
              <Link to="/login"> &nbsp; &nbsp; &nbsp;Login </Link>
            </React.Fragment>
          )}
        </Box>
      </div>

      <Route path="/" component={Home} exact={true} />
      <Route path="/register" component={Register} />
      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} handleAuth={handleAuth} />;
        }}
        exact={true}
      />
      <PrivateRoute path="/customer" component={CustomersContainer} />
      <PrivateRoute path="/products" component={ProductsContainer} />
      <PrivateRoute path="/bills" component={Bill} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  );
};
export default NavBar;
