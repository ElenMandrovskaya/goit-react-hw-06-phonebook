// import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { Main, Section, MainTitle } from './App.styled';
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";
import { Title } from "../components/Title/Title";

export default function App() {

  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <Main>
        <Section>
          <Title title={"Add contact"} />
          <ContactForm/>
        </Section>
        <Section>
          <Title title="Search contact" />
          <Filter
            // filterValue={filter}
            // onChange={filterContact}
          />
        </Section>
        <Section>
          <Title title="Contacts"/>
          <ContactList
            // contacts={checkContact()}
            // onDelete={removeContact}
          />
        </Section>
      </Main>
      </>
  )
}
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("contacts")) ?? defaultComtacts});
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {

  //   if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
  //     alert(`${name} is already in contacts`);
  //     return
  //   }
  //     const newContact = {
  //       id: uuidv4(),
  //       name,
  //       number,
  //     }
  //     setContacts((contacts) => [ newContact, ...contacts])
  // }
  // const filterContact = (e) => {
  //   setFilter(e.currentTarget.value);
  // }

  // const checkContact = () => {
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  // }

  // const removeContact = (contactId) => {
  //    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId))
  // }