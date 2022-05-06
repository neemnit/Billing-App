import React from 'react'
import { useDispatch } from 'react-redux'

import { startEditCustomer } from '../../actions/customersAction'
import CustomerForm from './CustomerForm'

const EditCustomer=(props)=>{
    const{_id,name,mobile,email,handleToggle}=props
    const dispatch=useDispatch()
    const formSubmit=(task)=>{
        console.log('igd',_id)
        dispatch(startEditCustomer(task,_id))
        handleToggle()
    }
    return (
        <div>
            <h2>Update the Customer</h2>
            <CustomerForm
            _id={_id} name={name} mobile={mobile} email={email}
            formSubmit={formSubmit}/>
        </div>
    )
}
export default EditCustomer