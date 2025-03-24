import { useEffect, useState } from 'react';
import { useUsers } from './useUsers';

interface User {
  id: number;
  name: string;
}

// const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  // const [users, setUsers] = useState<User[]>([]);
  const { users, isTimeoutError, repeatRequest } = useUsers();
  console.log('ddd', users);
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then(({ users }) => {
  //       setUsers(users);
  //     });
  // }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          {isTimeoutError && (
            <>
              {' '}
              <p className="mr-2">
                Sorry, there seems to be connectivity issues...
              </p>
              <button
                className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
                onClick={repeatRequest}
              >
                Try again
              </button>
            </>
          )}
        </div>
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
