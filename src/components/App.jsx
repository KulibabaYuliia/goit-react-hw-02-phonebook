import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = contactData => {
    const hasDuplicates = this.state.contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() ===
        contactData.name.toLocaleLowerCase()
    );

    if (hasDuplicates) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contactData, ...prevState.contacts],
    }));
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilterHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div
        style={{
          padding: '20px',
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Form handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          fliterValue={this.state.filter}
          onChangeFilterHandler={this.onChangeFilterHandler}
        />
        <ContactsList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
