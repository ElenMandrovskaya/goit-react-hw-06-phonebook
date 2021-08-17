import { combineReducers } from "redux";
import defaultContacts from '../../data/defaultContacts.json'
import contactsTypes from "./contacts-types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const initContacts = JSON.parse(localStorage.getItem("contacts")) ?? defaultContacts;
const initFilter = '';

const checkContact = (contacts, name) => {
    const existingName = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingName) {
        toast.info('Contact with such name already exists');
        return existingName;
    }
};

const itemReducer = (state = initContacts, action) => {
    switch (action.type) {
        case contactsTypes.ADD:
            const existingСontact = checkContact(state, action.payload.name);
            if (existingСontact) {
                return state;
            }
            localStorage.setItem("contacts", JSON.stringify([action.payload, ...state]));
            return [action.payload, ...state];
        case contactsTypes.REMOVE:
            const contacts = state.filter(item => item.id !== action.payload);
            localStorage.setItem("contacts", JSON.stringify(contacts));
            return contacts
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