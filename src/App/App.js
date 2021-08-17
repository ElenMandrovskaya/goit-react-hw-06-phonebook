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

  // const checkContact = () => {
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  // }

