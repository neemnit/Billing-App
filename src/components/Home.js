import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Home = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#2a4870" }}>
        Welcome to Billing App
      </h1>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card
            sx={{ minWidth: 275 }}
            variant="outlined"
            style={{
              backgroundColor: "#8ef8d5",
              borderColor: "red",
              borderRadius: "10px",
              borderWidth: "2px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 18 }} color="red" gutterBottom>
                <strong> User</strong>
              </Typography>
              <Typography variant="h6" component="div">
                User can register using your own credentials or for testing
                purpose one can use the below provided login credentials to
                login.
                <Typography>
                  {" "}
                  <strong>Email:</strong>admin2@gmail.com{" "}
                  <strong>Password:</strong> 12345678
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{ minWidth: 275 }}
            variant="outlined"
            style={{
              backgroundColor: "#8ef8d5",
              borderColor: "red",
              borderRadius: "10px",
              borderWidth: "2px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 18 }} color="red" gutterBottom>
                <strong> Customer</strong>
              </Typography>
              <Typography variant="h6" component="div">
                Once logged in user can add customer, edit customer or remove
                customer details in the specific page Also searching and sorting
                functionality is provided based on the name
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{ minWidth: 275 }}
            variant="outlined"
            style={{
              backgroundColor: "#8ef8d5",
              borderColor: "red",
              borderRadius: "10px",
              borderWidth: "2px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 18 }} color="red" gutterBottom>
                <strong>Products</strong>
              </Typography>
              <Typography variant="h6" component="div">
                After login User can add product by name and its price and
                update the product and also delete the product he/she can search
                the product name by name and sort the product by name and its
                price
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{ minWidth: 275 }}
            variant="outlined"
            style={{
              backgroundColor: "#8ef8d5",
              borderColor: "red",
              borderRadius: "10px",
              borderWidth: "2px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 18 }} color="red" gutterBottom>
                <strong>Dashboard</strong>
              </Typography>
              <Typography variant="h6" component="div">
                In the Dashboard user can see their daily transaction how many
                products sold ,total income,graphs to show income on particular
                date , how many customers
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
