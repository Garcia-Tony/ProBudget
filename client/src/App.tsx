import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthPage } from './pages/SwitchPage.tsx';
import { UserProvider } from './components/UserContext.tsx';
import { RegistrationForm } from './pages/SignUp.tsx';
import { Home } from './pages/Home.tsx';
import { NewExpense } from './pages/NewExpense.tsx';
import { ExpenseProvider } from './pages/ExpenseContext.tsx';
import { RecurringExpense } from './pages/RecurringExpense.tsx';
import { CalendarExpense } from './pages/CalendarExpense.tsx';
import { EditExpense } from './pages/EditExpense.tsx';

export function App() {
  return (
    <UserProvider>
      <ExpenseProvider>
        <Routes>
          <Route index element={<RegistrationForm />} />
          <Route path="/sign-up" element={<Navigate to="/" />} />
          <Route path="/log-in" element={<AuthPage mode="log-in" />} />
          <Route path="/new-expense" element={<NewExpense />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recurring" element={<RecurringExpense />} />
          <Route path="/calendar" element={<CalendarExpense />} />
          <Route path="/edit-expense" element={<EditExpense />} />
        </Routes>
      </ExpenseProvider>
    </UserProvider>
  );
}
