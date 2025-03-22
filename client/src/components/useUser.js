import { useContext } from 'react';
import { UserContext } from './UserContext';
export function useUser() {
  const values = useContext(UserContext);
  if (!values) throw new Error('useUser must be used inside a UserProvider');
  return values;
}
