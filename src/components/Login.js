import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoginUser } from "../actions/loginAction";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Link, Route } from "react-router-dom";
import Register from "../Register";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = (props) => {
  const { history, handleAuth } = props;
  const dispatch = useDispatch();
  const result = useSelector((state) => {
    return state.login;
  });
  useEffect(() => {
    if (result["token"]) {
      history.push("/dashboard");
      handleAuth();
    }
  }, [history, result, handleAuth]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(startLoginUser(values));
    },
  });

  return (
    <div className="background">
      <div>
        <h2 style={{ textAlign: "center", marginRight: "40px", color: "red" }}>
          {" "}
          Login{" "}
        </h2>
      </div>
      <div className="border1">
        <div className="register">
          <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <TextField
              id="outlined-basic"
              name="email"
              label="Enter your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              style={{ width: "50ch" }}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              style={{ width: "50ch" }}
            />
            <br />
            <br />
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="reset" color="error" variant="contained">
              Reset
            </Button>{" "}
            New User? <Link to="/register">please register</Link>
            <Route path="/register" component={Register} exact={true} />
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
