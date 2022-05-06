import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import { startGetProduct } from "../../actions/productAction";
import { useDispatch } from "react-redux";
const ProductsContainer = (props) => {
    const products = useSelector((state) => {
    return state.products;
  });

  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(startGetProduct());
  }, [dispatch]);
  return (
    <div className="product">
      <h2 style={{color:'blueviolet'}}>All Products - {products.length}</h2>
      <AddProduct />
      <ProductList />
    </div>
  );
};
export default ProductsContainer;
