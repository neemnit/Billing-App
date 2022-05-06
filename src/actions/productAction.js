import axios from '../config/axios'
export const startCreateProduct=(product)=>{
    return(dispatch)=>{
        axios.post('/products',product,{headers:{
            "Authorization":"Bearer " +localStorage.getItem('token')
        }})
        .then((response)=>{
            const result=(response.data)
            alert('product created successfully')
            dispatch(createProduct(result))

        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    
}
const createProduct=(result)=>{
    return{
        type:'CREATE_PRODUCT',
        payload:result
    }
}
export const startDeleteProduct=(id)=>{
    return(dispatch)=>{
        axios.delete(`/products/${id}`,{
            headers:{"Authorization":"Bearer " +localStorage.getItem('token')
        }})
        .then((response)=>{
            const result=response.data
            alert('product delete successfully')
            dispatch(deleteProduct(result))
        })
        .catch((err)=>[
            alert(err.message)
        ])

            }
        
    }


const deleteProduct=(result)=>{
    return{
        type:"DELETE_PRODUCT",
        payload:result
    }
}
export const startGetProduct=()=>{
    return(dispatch)=>{
        axios.get('/products',{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result=(response.data)
            dispatch(getProduct(result))
        })
    }
}
const getProduct=(result)=>{
    return{
        type:"GET_PRODUCT",
        payload:result
    }
}
export const startEditTasks=(task,_id)=>{
    console.log('taski',task,'ididid',_id)
    
    return(dispatch)=>{
        axios.put(`/products/${_id}`,task,{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result=response.data
            dispatch(editProduct(result))
        })
    }
}
const editProduct=(result)=>{
    return{
        type:'EDIT_PRODUCT',
        payload:result
    }
}