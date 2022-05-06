import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetUser } from "../actions/usersAction";
import Typography from "@mui/material/Typography";
const Profile = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetUser());
  }, [dispatch]);
  const profile = useSelector((state) => {
    return state.users;
  });

  return (
    <div style={{ margin: "2px" }}>
      <div className="profile">
        <Typography
          id="modal-modal-title"
          variant="h3"
          color="primary"
          component="h2"
        >
          {" "}
          My Profile
        </Typography>
        <br />
        <img
          src="unknown-man-profile-avatar-vector-male-office-icon-potrait-175425661.jpg"
          width="300px"
          alt="profile pic"
        />
        <br />
        <b> USERNAME:</b>
        {profile.username}
        <br />
        <b> EMAIL:</b> {profile.email}
        <br />
        <b> BUSINESS NAME:</b>
        {profile.businessName}
        <br />
      </div>
    </div>
  );
};
export default Profile;
