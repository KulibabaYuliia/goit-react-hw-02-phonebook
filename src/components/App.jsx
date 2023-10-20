import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
// import { Notification } from './Notification/Notification';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = contactData => {
    const hasDuplicates = this.state.contacts.some(
      contact => contact.name === contactData.name
    );

    if (hasDuplicates) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contactData, ...prevState.contacts],
    }));
  };

  onChangeFilterHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
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
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
