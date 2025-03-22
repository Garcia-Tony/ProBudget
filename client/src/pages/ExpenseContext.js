import { jsx as _jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState, useEffect } from 'react';
import { useData } from '../components/User';
const ExpenseContext = createContext(undefined);
export const ExpenseProvider = ({ children }) => {
  const { user } = useData();
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  useEffect(() => {
    if (!user || !user.userId) return;
    const storedExpenses = localStorage.getItem(`expenses_${user.userId}`);
    if (storedExpenses) {
      const parsedExpenses = JSON.parse(storedExpenses);
      setExpenses(parsedExpenses);
    } else {
      setExpenses([]);
    }
  }, [user]);
  const editExpense = (updatedExpense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.map((exp) =>
        exp.id === updatedExpense.id ? updatedExpense : exp
      );
      if (user?.userId) {
        localStorage.setItem(
          `expenses_${user.userId}`,
          JSON.stringify(updatedExpenses)
        );
      }
      return updatedExpenses;
    });
  };
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
    if (user?.userId) {
      const updatedExpenses = expenses.filter((expense) => expense.id !== id);
      localStorage.setItem(
        `expenses_${user.userId}`,
        JSON.stringify(updatedExpenses)
      );
    }
  };
  const addExpense = (expense) => {
    if (!user) return;
    const newExpense = { ...expense, id: Date.now().toString() };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    localStorage.setItem(
      `expenses_${user.userId}`,
      JSON.stringify(updatedExpenses)
    );
  };
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );
  return _jsx(ExpenseContext.Provider, {
    value: {
      expenses,
      addExpense,
      editExpense,
      selectedExpense,
      setSelectedExpense,
      totalAmount,
      deleteExpense,
    },
    children: children,
  });
};
export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenses must be used within an ExpenseProvider');
  }
  return context;
};
