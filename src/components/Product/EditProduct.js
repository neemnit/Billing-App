import React from 'react'
import { useDispatch } from 'react-redux'
import { startEditTasks } from '../../actions/productAction'
import ProductForm from './ProductForm'
const EditProduct=(props)=>{
    const{_id,name,price,handleToggle}=props
    const dispatch=useDispatch()
    const formSubmit=(task)=>{
        console.log('igd',_id)
        dispatch(startEditTasks(task,_id))
        handleToggle()
    }
    return (
        <div>
            <h2>Update the product</h2>
            <ProductForm
            _id={_id} name={name} price={price}
            formSubmit={formSubmit}/>
        </div>
    )
}
export default EditProduct