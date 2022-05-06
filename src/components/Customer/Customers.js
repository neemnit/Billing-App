import React, { useEffect, useState } from "react";
import * as EmailValidator from 'email-validator'
import { useDispatch, useSelector } from "react-redux";
import { startAddUser } from "../../actions/customersAction";
import { startDeleteCustomer } from "../../actions/customersAction";
import { startGetCustomer } from "../../actions/customersAction";
import EditTask from "./EditProduct";
import sortArray from 'sort-array'
const Customers=(props)=>{
  const[name,setName]=useState('')
  const[mobile,setMobile]=useState('')
  const[email,setEmail]=useState('')
  const[addCustomer,setAddCustomer]=useState(false)
  const[formErrors,setFormErrors]=useState({})
  
  const[id,setId]=useState({})
  const[searchCustomer,setSearchCustomer]=useState('')
  const[sort,setSort]=useState('')
  const errors={}
  const dispatch=useDispatch()
  
  const customers=useSelector((state)=>{
    
    
    return state.customers
  })
  console.log('customer',customers)
  const handleSortChange=(e)=>{
    setSort(e.target.value)
    if (e.target.value === "Name A-Z"){
        (sortArray(customers, {by:'name', order:'asc'}))
        //setData(result)
  
        //console.log(result)
    } else if (e.target.value === "Name Z-A") {
        (sortArray(customers, {by:'name', order:'desc'}))
    }
  }
  
 
 useEffect(()=>{
  dispatch(startGetCustomer())
  
 },[dispatch])
 

 // console.log('new',newCustomer)
 const handleDelete=(id)=>{
   if(window.confirm('Are you sure want to delete customer details?')){
    dispatch(startDeleteCustomer(id))

   }

 }
 const handleEdit=(id)=>{
const edit=customers.find((customer)=>{
  return customer._id===id
})
setId(edit)
//setEditTask(!editTask)
 }
 const handleChange1=(e)=>{
   setSearchCustomer(e.target.value)
 }
 const filterContacts=()=>{
  
     const filterContact= customers.filter(ele=>ele.name.toLowerCase().includes(searchCustomer.toLowerCase()))
     return filterContact
 }
   
  // return filterContact
 
 console.log('filter',filterContacts())
  const handleChange=(e)=>{
    if(e.target.name==="name"){
      setName(e.target.value)
    }
    if(e.target.name==="mobile"){
      setMobile(e.target.value)
    }
    if(e.target.name==="email"){
      setEmail(e.target.value)
    }
  }
  const handleCustomer=()=>{
    setAddCustomer(true)
  }
  const runvalidation=()=>{
    if(name.length===0){
      errors.name='please enter your name'
    }
   else if(name.length<5){
      errors.name='name must be of 5 letters'
    }
    if(mobile.length<10 || mobile.length>10){
      errors.mobile='invalid mobile number'
    }
    if(!EmailValidator.validate(email)){
      errors.email='invalid email format'


    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    runvalidation()

    if(Object.values(errors).length===0){
      setFormErrors({})
      const formData={
        name:name,
        mobile:mobile,
        email:email
      }
      dispatch(startAddUser(formData))
      setAddCustomer(false)
      setName('')
      setEmail('')
      setMobile('')
    }
    else{
      setFormErrors(errors)
    }

  }
  return(
    <div>
      <h1>Creating a Customer</h1>
      <h2>Total Customers-{customers.length}</h2>
      <input type='text' value={searchCustomer} onChange={handleChange1} placeholder='Search Customers by name'/> <span> <select  value={sort} onChange={handleSortChange}
           >
            <option value="">Sort By: None</option>
            <option value="Name A-Z">Name A-Z</option>
            <option value="Name Z-A">Name Z-A</option></select></span>
      {
        id._id && <EditTask id={id._id} name={id.name} mobile={id.mobile} email={id.emai}/>
      }
      <button onClick={handleCustomer}>AddCustomer</button>
      {
        addCustomer && <form onSubmit={handleSubmit}>
          <input type='text' value={name} onChange={handleChange} name="name" placeholder="Enter the customer name"/>
          {formErrors.name && <p>{formErrors.name}</p>}
            <br/>
          <input type='text' value={mobile} onChange={handleChange} name="mobile" placeholder="Enter the mobile no."/>
          {formErrors.mobile && <p>{formErrors.mobile}</p>}<br/>
          <input type='text' value={email} onChange={handleChange} name="email" placeholder="Enter email"/>
          {formErrors.email && <p>{formErrors.email}</p>}<br/>
          <input type='submit' value='save'/>
        </form>
      }
      {
        filterContacts().map((customer)=>{
          return(
            <div key={customer._id}><p>{customer.name} &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;   {customer.mobile}
            

             &nbsp; &nbsp; &nbsp; &nbsp;{customer.email} &nbsp; &nbsp; &nbsp; &nbsp;<button
              onClick={()=>{handleDelete(customer._id)}}>Delete</button><button onClick={()=>{handleEdit(customer._id)}}>Edit</button>
            </p></div>
          )
        })
      }
  
     
    </div>
  )
}
export default Customers