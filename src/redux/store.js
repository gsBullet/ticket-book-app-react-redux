import { createStore } from "redux";
import ticketReducer from "./ticketReducer";

const store = createStore(ticketReducer);
export default store;
