'use client';

import { useState, useTransition } from 'react';

export default function UsersList({ loadUsersAction }) {
  const [isPending, startTransition] = useTransition();
  const [users, setUsers] = useState();

  const onClick = () => {
    startTransition(async () => {
      const data = await loadUsersAction();
      setUsers(data);
    });
  };

  return (
    <>
      <button onClick={onClick}>Load users</button>
      {isPending ? <div>Loading users...</div> : users}
    </>
  );
}