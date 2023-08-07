import React, { useState } from 'react';

function AddUser() {
  const [userName, setUserName] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const addUser = () => {
    // Ici, vous enverriez une requête API pour ajouter l'utilisateur
    console.log(`Ajout de l'utilisateur : ${userName}`);
  };

  return (
    <div>
      <h2>Ajouter un Utilisateur</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={userName}
        onChange={handleUserNameChange}
      />
      <button onClick={addUser}>Ajouter</button>
    </div>
  );
}

export default AddUser;
