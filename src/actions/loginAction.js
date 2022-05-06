import axios from '../config/axios'
export const startLoginUser=(values)=>{
    return(dispatch)=>{
        axios.post('/users/login',values)
        .then((response)=>{
            const result=response.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }
            else{
                alert('successfully logged in ')
                localStorage.setItem('token',result.token)
                dispatch(loginUser(result))
    

            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

}
export const loginUser=(result)=>{
    return{
        type:'LOGIN_USER',
        payload:result
    }
}