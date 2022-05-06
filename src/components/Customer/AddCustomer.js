import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startAddUser } from "../../actions/customersAction";

import CustomerForm from "./CustomerForm";
const AddCustomer = (props) => {
  const dispatch = useDispatch();
  const [isSaved, setIsSaved] = useState(false);
  const formSubmit = (customer) => {
    dispatch(startAddUser(customer));
    setIsSaved(true);
  };
  const toggleIsSaved = () => {
    setIsSaved(false);
  };

  return (
    <div>
      <h2>Add New Customer</h2>
      <CustomerForm
        formSubmit={formSubmit}
        isSaved={isSaved}
        toggleIsSaved={toggleIsSaved}
      />
    </div>
  );
};
export default AddCustomer;
