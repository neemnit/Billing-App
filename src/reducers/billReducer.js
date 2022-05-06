// 
const billInitial=[]
const billReducer=(state=billInitial,action)=>{
    switch(action.type){
        case 'CREATE_BILL':{
            return [...[{...action.payload},...state]]
        }
        case 'GET_BILLS':{
            return[...action.payload]
        }
        case 'DELETE_BILL':{
            return state.filter((bill)=>{
                return bill._id!==action.payload._id
            })
            
        }
        default:{
            return [...state]
        }
    }
}
export default billReducer
// const billInitial={}
// const billReducer=(state=billInitial,action)=>{
//     switch(action.type){
//         case 'CREATE_BILL':{
//             return{...state,...action.payload}
//         }
//     }
// }