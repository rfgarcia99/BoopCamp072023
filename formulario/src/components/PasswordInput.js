import React, { useState } from 'react';

const PasswordInput = ({ onChange }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setError(newPassword ? '' : 'Contraseña es requerida');
    onChange(newPassword); // Aquí se pasa el valor al componente padre
  };

  return (
    <div className="form-group">
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default PasswordInput;
