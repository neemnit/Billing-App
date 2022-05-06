import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetBills } from "../actions/billAction";
import { startGetCustomer } from "../actions/customersAction";
import { startGetProduct } from "../actions/productAction";
import dateFormat from "dateformat";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const Dashboard = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(startGetProduct());
    dispatch(startGetCustomer());
    dispatch(startGetBills());
  }, [dispatch]);
  const customers = useSelector((state) => {
    return state.customers;
  });
  

  const products = useSelector((state) => {
    return state.products;
  });
  const Bills = useSelector((state) => {
    return state.bills;
  });

  const billSubTotal = Bills.map((ele) => {
    return ele.lineItems.map((element) => {
      return element.subTotal;
    });
  });

  let sum = 0;
  
  for (let i = 0; i < billSubTotal.length; i++) {
    for (let j = 0; j < billSubTotal[i].length; j++) {
      sum += billSubTotal[i][j];
    }
  }
  const billChart = Bills.map((ele) => {
    return {
      date: dateFormat(ele.date, "dd-mm-yyyy"),
      total: ele.lineItems.reduce((prev, current) => {
        return prev + current.subTotal;
      }, 0),
    };
  });
  
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Current Statistics</h1>
      <LineChart
        width={500}
        height={200}
        data={billChart}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
      <p>
        <strong>Customers- {customers.length}</strong> &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; <strong>Products- {products.length}</strong>
        &nbsp; &nbsp; &nbsp;<strong>Total Bills - {Bills.length}</strong> &nbsp;
        &nbsp; &nbsp; <strong>Revenues- INR.{sum}</strong>
      </p>
      <hr />
      <p>
        {" "}
        <strong>Recent 5 Customers</strong>{" "}
      </p>
      {customers
        .slice(-5)
        .reverse()
        .map((customer) => {
          return (
            <p key={customer._id}>
              <strong>{customer.name}</strong>
            </p>
          );
        })}
      <hr />
      <p>
        {" "}
        <strong>Recent 5 Products</strong>{" "}
      </p>
      {products
        .slice(-5)
        .reverse()
        .map((product) => {
          return (
            <p key={product._id}>
              <strong>{product.name}</strong>
            </p>
          );
        })}
      <hr />
    </div>
  );
};
export default Dashboard;
