// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '../types';
import { data } from '../constants';


type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  filteredUsers:User[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;

};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(data);
    setFilteredUsers(data);
    }, []);




  return (
    <UserContext.Provider value={{ users, setUsers,filteredUsers,setFilteredUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);



  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
