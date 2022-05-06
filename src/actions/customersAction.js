import axios from '../config/axios'
export const startAddUser=(formData)=>{
    return(dispatch)=>{
        axios.post('/customers',formData,{
        headers:{
            "Authorization":"Bearer " +localStorage.getItem('token')
        }})
        .then((response)=>{
            const result=(response.data)
            // if(result.hasOwnProperty('errmsg')){
            //     alert(result.errmsg)
            // }
            console.log(result)
            
                alert('customer added successfully')
            
            dispatch(addCustomer(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

}
const addCustomer=(result)=>{
    return{
        type:'ADD_CUSTOMER',
        payload:result
    }
}
export const startDeleteCustomer=(id)=>{
    return(dispatch)=>{
        axios.delete(`/customers/${id}`,{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem('token')
            }})
            .then((response)=>{
                const result=(response.data)
                dispatch(deleteCustomer(result))
                alert('Customer record deleted')
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

}
const deleteCustomer=(result)=>{
    return{
        type:"DELETE_CUSTOMER",
        payload:result
    }
}
export const startGetCustomer=()=>{
    return(dispatch)=>{
        axios.get('/customers',{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem('token')
            }})
            .then((response)=>{
                const result=(response.data)
                dispatch(getCustomers(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

}
const getCustomers=(result)=>{
    return{
        type:'GET_CUSTOMERS',
        payload:result
    }
}
export const startEditCustomer=(customer,_id)=>{
    return(dispatch)=>{
        axios.put(`/customers/${_id}`,customer,{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem('token')
            }})
            
        .then((response)=>{
            const result=response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }
            else{
                alert('customer updated successfully')
            }
            dispatch(editCustomer(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
        
    }
}
const editCustomer=(result)=>{
    return{
        type:"EDIT_CUSTOMER",
        payload:result
    }
}