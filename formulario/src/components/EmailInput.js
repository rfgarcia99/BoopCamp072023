import React, { useState } from 'react';

const EmailInput = ({ onChange }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setError(newEmail ? '' : 'Correo electrónico es requerido');
    onChange(newEmail); // Aquí se pasa el valor al componente padre
  };

  return (
    <div className="form-group">
      <label htmlFor="email">Correo Electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default EmailInput;
