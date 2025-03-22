import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthPage } from './pages/SwitchPage';
import { UserProvider } from './components/UserContext';
import { RegistrationForm } from './pages/SignUp';
import { Home } from './pages/Home';
import { NewExpense } from './pages/NewExpense';
import { ExpenseProvider } from './pages/ExpenseContext';
import { RecurringExpense } from './pages/RecurringExpense';
import { CalendarExpense } from './pages/CalendarExpense';
import { EditExpense } from './pages/EditExpense';
export function App() {
  return _jsx(UserProvider, {
    children: _jsx(ExpenseProvider, {
      children: _jsxs(Routes, {
        children: [
          _jsx(Route, { path: '/', element: _jsx(RegistrationForm, {}) }),
          _jsx(Route, {
            path: '/sign-up',
            element: _jsx(Navigate, { to: '/' }),
          }),
          _jsx(Route, {
            path: '/log-in',
            element: _jsx(AuthPage, { mode: 'log-in' }),
          }),
          _jsx(Route, { path: '/new-expense', element: _jsx(NewExpense, {}) }),
          _jsx(Route, { path: '/home', element: _jsx(Home, {}) }),
          _jsx(Route, {
            path: '/recurring',
            element: _jsx(RecurringExpense, {}),
          }),
          _jsx(Route, {
            path: '/calendar',
            element: _jsx(CalendarExpense, {}),
          }),
          _jsx(Route, {
            path: '/edit-expense',
            element: _jsx(EditExpense, {}),
          }),
        ],
      }),
    }),
  });
}
