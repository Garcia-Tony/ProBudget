import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from './pages/SwitchPage';
import { UserProvider } from './components/UserContext';
import { RegistrationForm } from './pages/SignUp';
import { Home } from './pages/Home';
import { NewExpense } from './pages/NewExpense';
import { ExpenseProvider } from './pages/ExpenseContext';
import { RecurringExpense } from './pages/RecurringExpense';
import { CalendarExpense } from './pages/CalendarExpense';

export function App() {
  return (
    <UserProvider>
      <ExpenseProvider>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/sign-up" element={<Navigate to="/" />} />
          <Route path="/log-in" element={<AuthPage mode="log-in" />} />
          <Route path="/new-expense" element={<NewExpense />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recurring" element={<RecurringExpense />} />
          <Route path="/calendar" element={<CalendarExpense />} />
        </Routes>
      </ExpenseProvider>
    </UserProvider>
  );
}
