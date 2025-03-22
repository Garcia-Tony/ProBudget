import { jsx as _jsx } from 'react/jsx-runtime';
import { createContext, useEffect, useState } from 'react';
import { removeAuth, saveAuth } from '../lib';
export const UserContext = createContext(undefined);
export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : undefined;
  });
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || undefined;
  });
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    if (user?.userId) {
      const storedExpenses = localStorage.getItem(`expenses_${user.userId}`);
      setExpenses(storedExpenses ? JSON.parse(storedExpenses) : []);
    }
  }, [user]);
  function handleSignIn(user, token) {
    setUser(user);
    setToken(token);
    saveAuth(user, token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    setTimeout(() => {
      const storedExpenses = localStorage.getItem(`expenses_${user.userId}`);
      if (storedExpenses) {
        setExpenses(JSON.parse(storedExpenses));
      }
    }, 0);
  }
  function handleSignOut() {
    setUser(undefined);
    setToken(undefined);
    removeAuth();
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setExpenses([]);
  }
  const saveExpense = (newExpense) => {
    if (user?.userId) {
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      localStorage.setItem(
        `expenses_${user.userId}`,
        JSON.stringify(updatedExpenses)
      );
    }
  };
  const contextValue = {
    user,
    token,
    expenses,
    handleSignIn,
    handleSignOut,
    saveExpense,
  };
  return _jsx(UserContext.Provider, {
    value: contextValue,
    children: children,
  });
}
