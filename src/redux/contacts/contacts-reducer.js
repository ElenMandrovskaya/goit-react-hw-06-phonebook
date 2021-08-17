import { combineReducers } from "redux";
import defaultContacts from '../../data/defaultContacts.json'
import contactsTypes from "./contacts-types";

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// const initItem = [];
const initFilter = '';

const itemReducer = (state = defaultContacts, action) => {
    switch (action.type) {
        case contactsTypes.ADD:
            return [...state, action.payload]
        default:
            return state
    }
};

const filterReducer = (state = initFilter, action) => {
     switch (action.type) {
        default:
            return state
    }
};

const rootReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
    }
);

export default rootReducer