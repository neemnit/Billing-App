import axios from '../config/axios'
export const startPostBills=(formData)=>{
    return(dispatch)=>{
        axios.post('/bills',formData,{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem('token')
            }})
            .then((response)=>{
                const result=(response.data)
            
            if(result.hasOwnProperty('errors')){
                alert(result._message)
            }
            else{
                dispatch(createBill(result))
                alert('Bill Created Successfully')
            }
    })
    .catch((err)=>{
        alert(err.message)
    })

}
}
const createBill=(result)=>{
    return{
        type:'CREATE_BILL',
        payload:result
    }
}
export const startGetBills=()=>{
    return(dispatch)=>{
        axios.get('/bills',{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem('token')
            }})
            .then((response)=>{
                const result=(response.data)
                console.log('result',result)
                dispatch(getBills(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

}
const getBills=(result)=>{
    return{
        type:'GET_BILLS',
        payload:result
    }
}

export const startDeleteBill=(id)=>{
     return(dispatch)=>{
        axios.delete(`/bills/${id}`,{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem('token')
            }})
            .then((response)=>{
                const result=(response.data)
                console.log('resulet',result)
if(result.hasOwnProperty('errors')){
    alert(result.errors)
}
else{
    alert('bills deleted successfully')
    dispatch(deleteBill(result))
}
         })         
.catch((err)=>{
    alert(err.message)
})
     }}

const deleteBill=(result)=>{
    return{
        type:'DELETE_BILL',
        payload:result
    }
}
    


    