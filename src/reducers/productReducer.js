const product=[]
const productReducer=(state=product,action)=>{
    switch(action.type){
        case 'CREATE_PRODUCT':{
        return [...[{...action.payload},...state]]
        
        
        }
        case 'DELETE_PRODUCT':{
            return state.filter((product)=>{
                return product._id!==action.payload._id
            })
        }
        case 'GET_PRODUCT':{
             return[...action.payload]
        }
        case 'EDIT_PRODUCT':{
            return state.map((product)=>{
                if(product._id!==action.payload._id){
                    return product
                }
                else{
                    return action.payload
                }
            })

        }
        default:{
            return [...state]
        }
    }

}
export default productReducer