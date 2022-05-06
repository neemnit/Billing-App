import React, { useState } from "react";
import * as EmailValidator from "email-validator";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

const CustomerForm = (props) => {
  const {
    formSubmit,
    name: sname,
    mobile: smobile,
    email: semail,
  } = props;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [name, setName] = useState(sname ? sname : "");
  const [mobile, setMobile] = useState(smobile ? smobile : "");
  const [email, setEmail] = useState(semail ? semail : "");
  const [formErrors, setFormErrors] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const errors = {};
  

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "mobile") {
      setMobile(e.target.value);
    }

    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };
  const runvalidation = () => {
    if (name.length === 0) {
      errors.name = "please enter Customer name";
    }

    if (mobile.length < 10 || mobile.length > 10) {
      errors.mobile = "invalid mobile number";
    }
    if (!EmailValidator.validate(email)) {
      errors.email = "invalid email format";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runvalidation();
    if (Object.values(errors).length === 0) {
      setFormErrors({});
      const formData = {
        name: name,
        mobile: mobile,
        email: email,
      };
      formSubmit(formData);
      setName("");
      setEmail("");
      setMobile("");
      setOpen(false)
    } else {
      setFormErrors(errors);
    }
  };
  const handleReset = () => {
    setName("");
    setEmail("");
    setMobile("");
  };

  return (
    <div>
      
       <Button onClick={handleOpen} variant="contained">Add Customer</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Button onClick={handleClose}>Close</Button>
          
          <form onSubmit={handleSubmit} onReset={handleReset}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Enter Customer name"
              value={name}
              onChange={handleChange}
              variant="outlined"
              name="name"
            />
            {formErrors.name && <p style={{textAlign:"center",color:'red'}}>{formErrors.name}</p>}
            <br />

            <TextField
              id="outlined-number"
              label="Enter the mobile no."
              type="number"
              value={mobile}
              onChange={handleChange}
              name="mobile"
              InputLabelProps={{
                shrink: true,
              }}
            />
            {formErrors.mobile && <p style={{textAlign:"center",color:'red'}}>{formErrors.mobile}</p>}
            <br />
            <TextField
              id="outlined-basic"
              label="Enter Email"
              value={email}
              onChange={handleChange}
              variant="outlined"
              name="email"
            />

            {formErrors.email && (
              <p style={{ textAlign: "center",color:'red' }}>{formErrors.email}</p>
            )}
          </Box>
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            SAVE
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="reset" variant="contained" color="success" size="small">
            RESET
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </form>
          </Box>
      </Modal>
      <br/>
      <br/><br/><br/>
    </div>
    
  );
};
export default CustomerForm;
