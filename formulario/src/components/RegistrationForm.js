import React, { useState } from 'react';
import './RegistrationForm.css';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <NameInput onChange={(name) => setFormData({ ...formData, name })} />
        <EmailInput onChange={(email) => setFormData({ ...formData, email })} />
        <PasswordInput onChange={(password) => setFormData({ ...formData, password })} />
        <button type="submit">Registrar</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Datos enviados:</h2>
          <p>Nombre: {submittedData.name}</p>
          <p>Correo Electrónico: {submittedData.email}</p>
          <p>Contraseña: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
