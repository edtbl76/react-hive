import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import { ContactsApp } from './ContactsApp';
import { ThemeArea } from './ThemeContext';

ReactDOM.render(
  <ThemeArea initialTheme="light">
    <ContactsApp />
  </ThemeArea>,
  document.getElementById('root')
)