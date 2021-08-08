import React, { useState, useEffect } from "react";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import "../index.css";

export default function App () {
  // state = {
  //   contacts: [
  //     // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts"));
  });
  const [filter , setFilter]= useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);




  const handelAddContact = (newContact) =>
  setContacts => ({
      contacts: [...contacts, newContact],
    }));

  const handelCheckUniqueContact = (name) => {
    
    const isExistContact = !!contacts.find((contact) => contact.name === name);
    isExistContact && alert("Contact is already exist");

    return !isExistContact;
  };

  const handleRemoveContact = (id) =>
   setContacts(contacts.filter((contact) => contact.id !== id)),


  const handelFilterChange = (e) =>setFilter(e.target.value);;

  const getVisibleContacts = () => {
    const filtered = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filtered)
    );
  };

 
    return (
      <>
        <ContactForm
          onAdd={this.handelAddContact}
          onCheckUnique={handelCheckUniqueContact}
        />
        <h2 className="title">Contacts List</h2>
        <Filter filter={filter} onChange={handelFilterChange} />
        <ContactList
          contacts={visibleContacts}
          onRemove={handleRemoveContact}
        />
      </>
    );

