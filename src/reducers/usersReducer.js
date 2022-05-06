const usersInitialState={}
const usersReducer=(state=usersInitialState,action)=>{
    switch(action.type){
        case 'REG_USER':{
           return {...action.payload}
        }
        // case 'LOGIN_USER':{
        //    // return {...state,...localStorage.setItem('token',action.payload)}
        //     return{...action.payload}
        // }
        case 'GET_USER':{
            return {...action.payload}
        }
        default:{
        return {...state}
        }
    }

}
export default usersReducer