import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { createUser } from '@/modules/users/application/create/createUser';
import { getAllUsers } from '@/modules/users/application/get-all/getAllUsers';

import { User } from '@/modules/users/domain/User';
import { UserRepository } from '@/modules/users/domain/UserRepository';

export interface ContextState {
  users: User[];
  createUser: (user: Omit<User, 'id'>) => Promise<void>;
}

export const UsersContext = createContext({} as ContextState);

export const UsersContextProvider = ({
  children,
  repository,
}: React.PropsWithChildren<{ repository: UserRepository }>) => {
  const [users, setUsers] = useState<User[]>([]);

  async function create(user: Omit<User, 'id'>) {
    const id = uuidv4();
    await createUser(repository, { id, ...user });
  }

  async function getUsers() {
    const users = await getAllUsers(repository);
    setUsers(users);
  }

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UsersContext.Provider value={{ users, createUser: create }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
