import React from 'react';

function UsersList() {
  const users = [
    { id: 1, name: 'Utilisateur 1' },
    { id: 2, name: 'Utilisateur 2' },
    { id: 3, name: 'Utilisateur 3' },
  ];

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
