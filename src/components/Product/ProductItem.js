import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startDeleteProduct } from "../../actions/productAction";
import EditProduct from "./EditProduct";
import Button from "@mui/material/Button";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteIcon from '@mui/icons-material/Delete';
const ProductItem = (props) => {
  
  const { _id, name, price } = props;
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(startDeleteProduct(_id));
  };
  const handleToggle = () => {
    const result = !toggle;
    setToggle(result);
  };
  return (
    <div>
      {toggle ? (
        <div>
          <EditProduct
            _id={_id}
            name={name}
            price={price}
            handleToggle={handleToggle}
          />
          <button onClick={handleToggle}>Cancel</button>
        </div>
      ) : (
        <div>
          <strong> {name} &nbsp; &nbsp; &nbsp; &nbsp;{price} &nbsp; &nbsp; &nbsp; &nbsp; </strong>
            
            <Button variant="contained"  color='success' onClick={handleToggle} startIcon={<EditSharpIcon />}style={{width:"40ch"}}>
        Edit
      </Button>&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color='error'  onClick={handleDelete} startIcon={<DeleteIcon />}style={{width:"40ch"}}>
        Delete
      </Button>
      <br/><br/>
          
        </div>
      )}
    </div>
  );
};
export default ProductItem;
