import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import sortedData from "../../helper/sortedData";
import ProductItem from "./ProductItem";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const ProductList = (props) => {
  console.log("propsosp", props);
  const products = useSelector((state) => {
    return state.products;
  });
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;
  useEffect(() => {
    setData([...products]);
  }, [products]);
  const filteredProducts = () => {
    const result = data.filter((ele) => {
      return ele.name.toLowerCase().includes(search.toLowerCase());
    });
    return result;
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const pageCount =
    filteredProducts().length > 0
      ? Math.ceil(filteredProducts().length / productsPerPage)
      : Math.ceil(data.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    let sortedProducts = [];
    if (e.target.value === "ascName") {
      sortedProducts = sortedData(data, "name");
    } else if (e.target.value === "descName") {
      sortedProducts = sortedData(data, "name").reverse();
    }
    else if(e.target.value==="Price Ascending"){
      sortedProducts=sortedData(data,"price","asc")
    }
    else if(e.target.value==="Price Descending"){
      sortedProducts=sortedData(data,"price","desc")
    }
     else {
      sortedProducts = [...products];
    }
    setData(sortedProducts);
  };
  return (
    <div>
      <h3>List of Products</h3>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          
       
      
        <TextField
        id="filled-search"
        label="Search by Product Name"
        type="search"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        style={{width:'40ch'}}
      />
       </Grid>
       <Grid item xs={4}>
      <div>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Sort Product By Name  Or Price</InputLabel>

      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{width:'40ch'}}
          label="Search product By Name "
          onChange={handleSortChange}
          value={sort}
        >
        
          
          <MenuItem value="ascName">Name A-Z</MenuItem>
          <MenuItem value="descName">Name Z-A</MenuItem>
          <MenuItem value="Price Ascending">Price Ascending</MenuItem>
          <MenuItem value="Price Descending">Price Descending</MenuItem>
          
        </Select>
        </FormControl>
        {/* <select value={sort} onChange={handleSortChange}>
          <option value="">Sort By: None</option>
          <option value="ascName">Name A-Z</option>
          <option value="descName">Name Z-A</option>
          <option value="Price Ascending">Price Ascending</option>
          <option value="Price Descending">Price Descending</option>
        </select> */}
      </div></Grid></Grid><br/>
      {search ? (
        <div>
          {filteredProducts().length > 0 ? (
            filteredProducts()
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => {
                return <ProductItem key={product._id} {...product} />;
              })
          ) : (
            <h3>No Products Added</h3>
          )}
        </div>
      ) : (
        <div>
          {data.length > 0 ? (
            data
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => {
                return <ProductItem key={product._id} {...product} />;
              })
          ) : (
            <h3>No Products Added</h3>
          )}
        </div>
      )}
      <ReactPaginate
        previousLabel={"Previous"}
        pageCount={pageCount}
        nextLabel="next "
        onPageChange={changePage}
      />
      <br/>
    </div>
  );
};
export default ProductList;
