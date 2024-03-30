import { createStore , applyMiddleware} from "redux";
import ticketReducer from "./ticketReducer";
import logger from "redux-logger";


// ******custom logger *******
// const myLogger = (store)=> (next)=> (action)=>{

//     console.log(action.payload);
//     console.log(store.getState());

//     return next(action);
// }


// **********middleware *****
// const store = createStore(ticketReducer,applyMiddleware(logger));
const store = createStore(ticketReducer);
export default store;
