import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./contacts/contacts-reducer";

const store = createStore(rootReducer, devToolsEnhancer());

export default store;