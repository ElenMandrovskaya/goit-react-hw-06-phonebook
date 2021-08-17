import { combineReducers } from "redux";
import defaultContacts from '../../data/defaultContacts.json'

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