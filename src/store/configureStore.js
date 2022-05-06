import{createStore,combineReducers,applyMiddleware} from 'redux'
import customersReducer from '../reducers/customersReducer'
import thunk from 'redux-thunk'
import billReducer from '../reducers/billReducer'
import usersReducer from '../reducers/usersReducer'
import productReducer from '../reducers/productReducer'
import loginReducer from '../reducers/loginReducer'

  const configureStore=()=>{
const store= createStore(combineReducers({

users:usersReducer,
login:loginReducer,
customers:customersReducer,
products:productReducer,
bills:billReducer

}),applyMiddleware(thunk))
return store
  }
  export default configureStore