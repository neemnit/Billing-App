import React, { useEffect } from "react";
import{Link,Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { startRegisteredUser } from "./actions/usersAction";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Login from '../src/components/Login'

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  businessName: yup
    .string("Enter your business name")
    .required("Businsess Name is Required"),
  address: yup
    .string("Enter your business address")
    .required("Address is required"),
});

const Register = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    if (user.hasOwnProperty("businessName")) {
      props.history.push("/login");
    }
  }, [props.history, user]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      businessName: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(startRegisteredUser(values));
    },
  });

  return (
    <div className="background">
       <div><h2 style={{textAlign:'center',marginRight:"40px",color:'red'}}> Store Owner Register</h2></div>
   <div className="border1">
      <div className="register">
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <TextField
          id="username"
          name="username"
          label="Enter the Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          style={{ width: "50ch"}}
        />
        <br />
        <br />
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
        <TextField
          id="outlined-basic"
          name="businessName"
          label="Enter the Business Name"
          value={formik.values.businessName}
          onChange={formik.handleChange}
          error={
            formik.touched.businessName && Boolean(formik.errors.businessName)
          }
          helperText={formik.touched.businessName && formik.errors.businessName}
          style={{ width: "50ch" }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          name="address"
          label="Enter your Business Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          style={{ width: "50ch" }}
        />
        <br />
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="reset" color="error" variant="contained">
          Reset
        </Button>
        <br/>
        <br/>
         Already Registered ?<Link to='/login'>Login</Link>
         <Route path='/login' component={Login}/>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Register;
