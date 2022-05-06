import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import sortedData from "../../helper/sortedData";
import CustomerItem from "./CustomerItem";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
const CustomerList = (props) => {
const customer=useSelector((state)=>state.customers)

  useEffect(() => {
        setData([...customer])
    ;
  }, [customer]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [data, setData] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;
  const filteredContacts= () => {
    const result = data.filter((ele) => {
      return ele.name.toLowerCase().includes(search.toLowerCase()) ||ele.mobile.includes(search);
    });
    return result;
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const pageCount =
  filteredContacts().length > 0
    ? Math.ceil(filteredContacts().length / productsPerPage)
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
  } else {
    sortedProducts = [...customer];
  }
  setData(sortedProducts);
};

  return (
    <div><br/>
          
          <Grid container spacing={1}  >
        <Grid item xs={6}>
          <TextField
        id="filled-search"
        label="Search by customer name or mobile Number"
        type="search"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        style={{width:'40ch'}}
      /></Grid>
      <div>
        <br/>
        <Grid item xs={6}>
        <FormControl>
        <InputLabel id="demo-simple-select-label">Sort Customer By Name</InputLabel>

      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{width:'40ch'}}
          label="Search Customer By Name "
          onChange={handleSortChange}
          value={sort}
        >
        
          
          <MenuItem value="ascName">Name A-Z</MenuItem>
          <MenuItem value="descName">Name Z-A</MenuItem>
          
          
        </Select>
        </FormControl></Grid>
      </div></Grid>
      {search ? (
        <div>
          {filteredContacts().length > 0 ? (
            filteredContacts()
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => {
                return <CustomerItem key={product._id} {...product} />;
              })
          ) : (
            <h3>No Customer</h3>
          )}
        </div>
      ) : (
        <div>
          {data.length > 0 ? (
            data
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => {
                return <CustomerItem key={product._id} {...product} />;
              })
          ) : (
            <h3>No Customer</h3>
          )}
        </div>
      )}
      <ReactPaginate
        previousLabel={"Previous"}
        pageCount={pageCount}
        nextLabel="next "
        onPageChange={changePage}
      />
    </div>
  );
};
export default CustomerList;

