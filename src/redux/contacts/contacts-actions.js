import contactsTypes from './contacts-types'

export const addContact = (formData) => ({
    type: contactsTypes.ADD,
    payload: formData,
})