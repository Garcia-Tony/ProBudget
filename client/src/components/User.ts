import { useContext } from 'react';
import { UserContext, UserContextValues } from './UserContext.tsx';

export type { User } from './UserContext.tsx';

export function useData(): UserContextValues {
  const values = useContext(UserContext);
  if (!values) throw new Error('useUser must be used inside a UserProvider');
  return values;
}
