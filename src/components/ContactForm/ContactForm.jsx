import { nanoid } from 'nanoid';
import { FormWrap } from './ContactForm.styled';
import React, { Component } from 'react';

// submitHandler = e => {
//   e.preventDefault();
// };

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  submitHandler = e => {
    e.preventDefault();

    const contactData = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.props.handleAddContact(contactData);

    this.setState({
      name: '',
      number: '',
    });
  };

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormWrap onSubmit={this.submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.inputChangeHandler}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="123-45-67"
            value={this.state.number}
            onChange={this.inputChangeHandler}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </FormWrap>
    );
  }
}
