import UsersList from './UsersList';

export default function Page() {
  async function loadUsersAction() {
    "use server";
  
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const users = [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Doe", age: 40 },
    ];
  
    return (
      <ul>
        {users?.map((user) => (
          <li key={user.name}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    );
  }

  return <UsersList loadUsersAction={loadUsersAction} />;
}