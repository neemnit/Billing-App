import React from 'react'
import {  useSelector } from 'react-redux'
import dateFormat from 'dateformat'
import { startDeleteBill } from '../../actions/billAction'
const BillDetails=(props)=>{

    const{customer,_id,handleDeleteBill}=props
    const{lineItems,date}=props
    console.log('line',lineItems)

    const Customer=useSelector((state)=>state.customers)
    const Product=useSelector((state)=>state.products)
    const Bills=useSelector((state)=>state.bills)
    const handleProduct=(id)=>{
     const productFind= Product.find((prod)=>{
          return prod._id===id
      })
      return productFind.name
    }
    const filterBill=Customer.map((cust)=>{
        if(cust._id===customer){
            return {name:cust.name,date:dateFormat(cust.date,("dddd,mmmm,dS,yyyy")),lineItems:lineItems.map((prod)=>{
                console.log('fusgt',dateFormat(cust.date,("dddd,mmmm,dS,yyyy")))
                return handleProduct(prod.product)
            })}
        }
    })

    return(
        <div>
            
           <ul>{
                Customer.map((cust)=>{

                   if(cust._id===customer){
                       return <li key={cust._id}>{cust.name}  &nbsp; &nbsp; &nbsp; &nbsp; 
                       {dateFormat(date, "dddd,mmmm dS, yyyy")}&nbsp;&nbsp;&nbsp;{
                           lineItems.map((prod)=>{
                               return handleProduct(prod.product)
                           })
                       }{
                            <button onClick={()=>{handleDeleteBill(_id)}}>Delete</button>
                       }
                        </li>
                   }
                })
            
            }</ul> 
        </div>
    )
}
export default BillDetails