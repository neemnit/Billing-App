import axios from '../config/axios'

export const startRegisteredUser=(values)=>{
    return(dispatch)=>{
        axios.post('/users/register',values)
        .then((response)=>{
            const result=response.data
            console.log('result',result)
            if(result.hasOwnProperty('errmsg')){
                alert(result.errmsg)
            }
            else{
                dispatch(registerUser(result))
               // alert('User Registered successfully')
               // dispatch(registerUser(result))
            }
           
        })
        .catch((err)=>{
            alert(err.message)
        })
        
    }
}
const registerUser=(result)=>{
    return{
        type:'REG_USER',
        payload:result
    }
}
// export const startLoginUser=(values)=>{
//     return(dispatch)=>{
//         axios.post('http://dct-billing-app.herokuapp.com/api/users/login',values)
//         .then((response)=>{
//             const result=response.data
//             if(result.hasOwnProperty('errors')){
//                 alert(result.errors)
//             }
//             else{
//                 alert('successfully logged in ')
//                 localStorage.setItem('token',result.token)
//                 dispatch(loginUser(result))
    

//             }
//         })
//         .catch((err)=>{
//             alert(err.message)
//         })
//     }

// }
// export const loginUser=(result)=>{
//     return{
//         type:'LOGIN_USER',
//         payload:result
//     }
// }
export  const startGetUser=()=>{
    return(dispatch)=>{
        axios.get('/users/account',{
            headers:{
                "Authorization":"Bearer " +localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result=response.data
            dispatch(getUser(result))
        })
    }

}
export const getUser=(result)=>{
    return{
        type:'GET_USER',
        payload:result
    }

}