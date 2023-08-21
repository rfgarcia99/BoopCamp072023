import React, { useState } from 'react';

const NameInput = ({ onChange }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    setError(newName ? '' : 'Nombre es requerido');
    onChange(newName); // Aquí se pasa el valor al componente padre
  };

  return (
    <div className="form-group">
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default NameInput;
