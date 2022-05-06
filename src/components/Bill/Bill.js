import React, { useEffect, useState } from "react";
import { startGetProduct } from "../../actions/productAction";
import { startGetCustomer } from "../../actions/customersAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startDeleteBill, startPostBills } from "../../actions/billAction";
import { startGetBills } from "../../actions/billAction";
import BillDetails from "./BillDetails";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Bill = (props) => {
  const [bill, setBill] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, -14));
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('');
  const [lineItems, setLineItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(true);
  const[formErrors,setFormErrors]=useState({})
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const error={}
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const handleChange = (e) => {
    if(e.target.name==="date"){
      setDate(e.target.value)
    }
    
    else if (e.target.name === "customer") {
      setCustomer(e.target.value);
    } else if (e.target.name === "product") {
      setProduct(e.target.value);

      setCart(false);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetProduct());
    dispatch(startGetCustomer());
    dispatch(startGetBills());

  }, [dispatch]);
  const Customers = useSelector((state) => {
    return state.customers;
  });
  const Products = useSelector((state) => state.products);

  const Bills = useSelector((state) => state.bills);

  const filterProducts = (product) => {
    const prodName = Products.filter((produc) => {
      return produc._id === product;
    });

    return prodName;
  };

  const handleCart = () => {
    const newArray = [...lineItems, { product, quantity }];
    setLineItems(newArray);
  };
  const incQuantity = (id) => {
    const map = lineItems.map((ele, i) => {
      if (i === id) {
        const newArray = { ...ele, ...{ quantity: ele.quantity + 1 } };

        return newArray;
      } else {
        return { ...ele };
      }
    });
    setLineItems(map);
  };
  const decQuantity = (id) => {
    const map = lineItems.map((ele, i) => {
      if (i === id) {
        const newArray = { ...ele, ...{ quantity: ele.quantity - 1 } };

        return newArray;
      } else {
        return { ...ele };
      }
    });
    setLineItems(map);
  };
  const handleDelete = (id) => {
    const filterCart = lineItems.filter((ele, i) => {
      return i !== id;
    });
    setLineItems(filterCart);
  };
  const productFunc = (price, quantity) => {
    const sum = price * quantity;

    return sum;
  };
  const runValidation=()=>{
    if(customer.length===0){
      error.customer='please select the customer'
    }
    else if(product.length===0){
      error.product='please select the product'
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    runValidation()
    if(Object.values(error).length===0){
      setFormErrors({})
    
    const formData = {
      date: date,
      customer: customer,

      lineItems: [...lineItems],
    };
    dispatch(startPostBills(formData));
    setDate(date);
    setLineItems([]);
    setCustomer("");
    setProduct("");
    setCart(true);
    setOpen(false)
  }
  else{
    setFormErrors(error)
  }
  };
  const handleDeleteBill = (_id) => {
    Bills.filter((bill) => {
      if (bill._id === _id) {
        dispatch(startDeleteBill(bill._id));
      }
    });
  };
  
  
  return (
    <div>
      <h1>Listing Bills-{Bills.length}</h1>
      
      <Button onClick={handleOpen} variant="contained">Add Bill</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Button onClick={handleClose}>Close</Button>
        
      
       
        <div>
          <h2>Create a new bill</h2>
          
         
          
      <Button variant="contained"  color='primary' onClick={() => {
              handleCart();
            }}  startIcon={<AddShoppingCartIcon  />}style={{width:"1ch"}} disabled={cart}>
        
      </Button>
          
          <form onSubmit={handleSubmit}>
          <Grid container spacing={1}  >
        <Grid item xs={4}>
      
            <input
              type="date"
              value={date}
              onChange={handleChange}
              name="date"
            />
            </Grid>
            <Grid item xs={4}>
            <FormControl sx={{ m: 1, minWidth: '25ch' }}>
            <InputLabel id="demo-simple-select-autowidth-label">Select Customer</InputLabel>
            <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          label="Select Customer"
          name="customer"
          onChange={handleChange}
          value={customer}
        >
        
          
          
          {Customers.map((customer) => {
                return (
                  <MenuItem value={customer._id} key={customer._id}>
                    {customer.name}
                  </MenuItem>
                );
              })}</Select></FormControl>
              </Grid>
        
          
              
              
            {formErrors.customer && <span>{formErrors.customer}</span>}
            <Grid item xs={4}> <FormControl sx={{ m: 1, minWidth:'25ch' }}>
               <InputLabel id="demo-simple-select-autowidth-label">Select Product</InputLabel>
               <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          label="Select Product"
          name="product"
          onChange={handleChange}
          value={product}
        >
              
              {Products.map((product) => {
                return (
                  
                  <MenuItem value={product._id} key={customer._id}>
                  {product.name}
                </MenuItem>
                );
              })}
            </Select></FormControl>
            </Grid>
            {formErrors.product && <p>{formErrors.product}</p>}

            <br />
            <div></div>
            <br />
            <input type="submit" value="SUBMIT" />
            </Grid>  </form>

          {lineItems.map((ele, i) => {
            return (
              <div key={i}>
                {filterProducts(ele.product).map((product) => {
                  return (
                    <p key={product._id}>
                      {product.name}
                      
                      <button 
                        onClick={() => {
                          decQuantity(i);
                        }}
                        disabled={ele.quantity === 1}
              
                      >
                        -
                      </button>
                      {ele.quantity}
                      <button
                        onClick={() => {
                          incQuantity(i);
                        }}
                      >
                        +
                      </button>

                      <button
                        onClick={() => {
                          handleDelete(i);
                        }}
                      >
                        Delete
                      </button>
                      {productFunc(product.price, ele.quantity)}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
    </Box>
    </Modal>
    {Bills.map((bill) => {
            return (
              <BillDetails
                {...bill}
                key={bill._id}
                handleDeleteBill={handleDeleteBill}
              />
            );
          })}
    </div>
  );
};
export default Bill;
