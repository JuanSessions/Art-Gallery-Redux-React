import {createStore} from "redux"
import {myReducer} from "./reducers/reducer"

const { createStore } = Redux;

const store = createStore(myReducer);


export default store;