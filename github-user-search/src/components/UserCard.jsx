import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h2>{user.name ? user.name : user.login}</h2>
      <a href={user.html_url} target="_blank" rel="noreferrer">View GitHub Profile</a>
    </div>
  );
};

export default UserCard;