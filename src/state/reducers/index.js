import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

const reducers = combineReducers({
    cartitems: CartReducer
})
export default reducers