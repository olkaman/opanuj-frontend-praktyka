import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = '/api/data/users?timeout=10000';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isTimeoutError, setIsTimeoutError] = useState(false);

  async function getUsers() {
    await axios
      .get(API_URL, { timeout: 5000 })
      .then((response) => {
        setIsTimeoutError(false);
        setUsers(response.data);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          setIsTimeoutError(true);
        }
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  const repeatRequest = () => {
    setIsTimeoutError(false);
    getUsers();
  };

  return { users, isTimeoutError, repeatRequest };
};
