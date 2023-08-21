import React, { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';


function App() {
  return (
    <div className="app">
      <h1>Formulario de Registro</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;
