import { v4 as uuidv4 } from 'uuid';
import contactsTypes from './contacts-types'

export const addContact = ({name, number}) => ({
    type: contactsTypes.ADD,
    payload: {
        id: uuidv4(),
        name,
        number,
    }
});

export const removeContact = (id) => ({
    type: contactsTypes.REMOVE,
    payload: id,
});
