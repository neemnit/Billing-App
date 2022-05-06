

const iniitalValue=[]
const customersReducer=(state=iniitalValue,action)=>{
    switch(action.type){
        case 'ADD_CUSTOMER':{
        
//const customer=[...state,{...action.payload}]
return [...[{...action.payload},...state]]
//const newCustomer=[...customer]
//return newCustomer

        }
        case 'DELETE_CUSTOMER':{
             return state.filter((customer)=>{
                 return customer._id!==action.payload._id
             })
            
        }
        case 'GET_CUSTOMERS':{
            return[...action.payload]
        }
        case 'EDIT_CUSTOMER':{
            return state.map((ele)=>{
                if(ele._id===action.payload._id){
                    return action.payload
                }
                else{
                    return ele
                }
            })
        }
        default:{
            return[...state]
        }
    }
}
export default customersReducer