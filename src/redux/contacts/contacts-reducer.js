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
            return [action.payload, ...state];
        case contactsTypes.REMOVE:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};

const filterReducer = (state = initFilter, action) => {
    switch (action.type) {
        case contactsTypes.FILTER:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
    }
);

export default rootReducer