# Billing-App
In this App I create an App which maintains a bill of daily transactions in a shop.
The Shop Owner can maintain their customer details and product details
He/She can also generate bills and can observe bill by graph that how much his/her income at particular date.
It is created using React and Redux. It has five modules: dashboard, user, customer, product and bills.
## Packages Used
- Formic
- Yup
- recharts
- axios
- material-ui
## you can visit my app  please click here [Demo](https://pos-bill.netlify.app/)
## Feature
- User Module

 In this App User/BusinessOwner can registered by their appropriate credentials 
 once user successfully registered then he has to login by same email and password , if he logged in to the system successfully then a token will generate and send to the front end .After that User can add customers,product,bills and also he can see his profile.
 - Customer Module
 
 In Customer Module User can add customer by  their name,mobile number,email id and  create  customer list with name ,emailid and mobile number as well as  user can search customer by their name and his mobile number and edit,delete the customer details.
 User can also sort the customer list according to name in ascending or descending order.
 i have also done client side validation if user can submit button without filling the customer details
 - Product Module
 
  In product User can add product name(Soap,Toothpaste,etc) and price 
  done Search Functionality ,Sorting Functionality according to both(product name & price)
  Listing functionality and also user can delete and update the product list
  - Bills
  
   After adding and creating Customer list and Product list 
   User can make a bill for customer what are the things Customer purchased and also what is the total bills
   
   - Dashboard
   
   In the Dashboard User can see their toal income on particular date 
   i generate a line chart which shows what is the income at particular date
   User can see how many customer he has how many products he has ,no.of total bills 
   last 5 transactions last 5 Customer and last 5 Products
   
   ## Contributor
   [Nitish Kumar](https://github.com/neemnit)
