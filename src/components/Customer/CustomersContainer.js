import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCustomer from "./AddCustomer";
import CustomerList from "./CustomerList";
import { startGetCustomer } from "../../actions/customersAction";
const CustomersContainer = (props) => {
  
  const customers = useSelector((state) => {
    return state.customers;
  });
  console.log("customers", customers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetCustomer());
  }, []);

  return (
    <div className="Customer">
      <h2 style={{color:'#ae4532f'}}>All Customers {customers.length}</h2>
      <AddCustomer />
      <CustomerList />
    </div>
  );
};
export default CustomersContainer;
