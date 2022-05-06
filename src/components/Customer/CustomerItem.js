import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startDeleteCustomer } from "../../actions/customersAction";
import Button from "@mui/material/Button";
import EditCustomer from "./EditCustomer";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomerItem = (props) => {
  const { _id, name, mobile, email } = props;
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(startDeleteCustomer(_id));
  };
  const handleToggle = () => {
    const result = !toggle;
    setToggle(result);
  };
  return (
    <div>
      {toggle ? (
        <div>
          <EditCustomer
            _id={_id}
            name={name}
            mobile={mobile}
            email={email}
            handleToggle={handleToggle}
          />

          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handleToggle}
          >
            CANCEL
          </Button>
        </div>
      ) : (
        <div>
          <p>
            {" "}
            <strong>
              {" "}
              {name} &nbsp; &nbsp; &nbsp; &nbsp;{mobile} &nbsp; &nbsp; &nbsp;
              &nbsp; {email}
            </strong>
            <Button
              variant="contained"
              color="success"
              onClick={handleToggle}
              startIcon={<EditSharpIcon />}
              style={{ width: "40ch" }}
            >
              Edit
            </Button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
              startIcon={<DeleteIcon />}
              style={{ width: "40ch" }}
            >
              Delete
            </Button>
          </p>
        </div>
      )}
    </div>
  );
};
export default CustomerItem;
