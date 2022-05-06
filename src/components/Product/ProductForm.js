import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
const ProductForm = (props) => {
  const { formSubmit,  name: sname, price: sprice } = props;
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
  const [price, setPrice] = useState(sprice ? sprice : "");
  const [formErrors, setFormErrors] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const errors = {};

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "price") {
      setPrice(e.target.value);
    }
  };
  const runvalidation = () => {
    if (name.length === 0) {
      errors.name = "please enter product name";
    }

    if (price.length === 0) {
      errors.price = "please enter price";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runvalidation();
    if (Object.values(errors).length === 0) {
      setFormErrors({});
      const formData = {
        name: name,
        price: price,
      };
      formSubmit(formData);
      setName("");
      setPrice("");
      setOpen(false)
    } else {
      setFormErrors(errors);
    }
  };
  const handleReset=()=>{
    setName('')
    setPrice('')
  }

  return (
    <div>
      
        {/* <button onClick={handleProduct}>Add New Product</button>
      
      {isProduct && (
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            placeholder="Enter product name"
          /><br/>
          {formErrors && <p>{formErrors.name}</p>}
          
          <input
            type="text"
            value={price}
            onChange={handleChange}
            name="price"
            placeholder="Enter product Price"
          /><br/>
          {formErrors && <p>{formErrors.price}</p>}
          
          <input type="submit" value="Save" />
          <input type='reset' value='Cancel'/>
        </form>
      )}{" "} */}
      <Button onClick={handleOpen} variant="contained">Add New Product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Button onClick={handleClose}>Close</Button>
        <form onSubmit={handleSubmit} onReset={handleReset}>
        <TextField
              id="outlined-basic"
              label="Enter Product Name"
              value={name}
              onChange={handleChange}
              variant="outlined"
              name="name"
            />
          <br/>
          {formErrors && <p>{formErrors.name}</p>}
          <TextField
              id="outlined-number"
              label="Enter produce price."
              type="number"
              value={price}
              onChange={handleChange}
              name="price"
              InputLabelProps={{
                shrink: true,
              }}
            />
          <br/>
          {formErrors && <p>{formErrors.price}</p>}
          
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
        </Box></Modal>
    </div>
  );
};
export default ProductForm;
