import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreateProduct } from "../../actions/productAction";
import ProductForm from "./ProductForm";
const AddProduct = (props) => {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);
  const formSubmit = (product) => {
    dispatch(startCreateProduct(product));
    setIsSaved(true);
  };
  const toggleIsSaved = () => {
    setIsSaved(false);
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <ProductForm
        formSubmit={formSubmit}
        isSaved={isSaved}
        toggleIsSaved={toggleIsSaved}
      />
    </div>
  );
};
export default AddProduct;
