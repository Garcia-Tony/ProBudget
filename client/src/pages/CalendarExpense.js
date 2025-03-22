import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../components/User';
import { useExpenses } from './ExpenseContext';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../index.css';
export function CalendarExpense() {
  const { expenses } = useExpenses();
  const { handleSignOut } = useData();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [expense, setExpense] = useState(false);
  const [, setCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [popupExpenses, setPopupExpenses] = useState(null);
  const handlePopUp = () => setPopUp(true);
  const closePopUp = () => setPopUp(false);
  const handleExpense = () => setExpense(true);
  const handleCalendar = () => setCalendar(true);
  const closeExpense = () => setExpense(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const formatDate = (date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  const isRecurringExpense = (expense, date) => {
    const dueDate = new Date(expense.dueDate);
    const current = new Date(dueDate);
    const dateString = formatDate(date);
    while (current <= date) {
      if (formatDate(current) === dateString) return true;
      switch (expense.schedule) {
        case 'every-week':
          current.setDate(current.getDate() + 7);
          break;
        case 'every-month':
          current.setMonth(current.getMonth() + 1);
          break;
        case 'every-3-months':
          current.setMonth(current.getMonth() + 3);
          break;
        case 'every-6-months':
          current.setMonth(current.getMonth() + 6);
          break;
        case 'every-year':
          current.setFullYear(current.getFullYear() + 1);
          break;
        default:
          return false;
      }
    }
    return false;
  };
  const tileContent = ({ date }) => {
    const dateString = formatDate(date);
    const hasExpense = expenses.some(
      (expense) =>
        formatDate(new Date(expense.dueDate)) === dateString ||
        isRecurringExpense(expense, date)
    );
    return hasExpense
      ? _jsx('div', {
          className: 'relative flex justify-end w-full',
          children: _jsx('span', { className: 'expense-dot' }),
        })
      : null;
  };
  const handleDateClick = (value) => {
    if (!value || Array.isArray(value)) return;
    const date = value;
    setSelectedDate(date);
    const dateString = formatDate(date);
    const expensesOnDate = expenses.filter(
      (expense) =>
        formatDate(new Date(expense.dueDate)) === dateString ||
        isRecurringExpense(expense, date)
    );
    if (expensesOnDate.length > 0) {
      setPopupExpenses({ date: dateString, expenses: expensesOnDate });
    } else {
      setPopupExpenses(null);
    }
  };
  return _jsxs('div', {
    className: 'relative flex-grow flex-1 pl-2 px-4',
    children: [
      _jsxs('div', {
        className: 'flex it\n      ems-center w-full justify-between space-x-4',
        children: [
          _jsx('button', {
            className:
              'rounded py-2 px-1.5 bg-white hover:bg-gray-200 transition mt-6',
            onClick: toggleMenu,
            children: _jsx('svg', {
              className: 'md:w-[50px] md:h-[50px] w-8 h-8 text-[#01898B]',
              viewBox: '0 0 448 512',
              children: _jsx('path', {
                fill: 'currentColor',
                d: 'M16 132h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
              }),
            }),
          }),
          _jsx('img', {
            src: '/ProBudget.png',
            alt: 'Pro Budget Logo',
            className:
              'size-14 max-w-[60px] max-h-[60px] mt-5 md:size-20 md:mt-4 md:max-w-[150px] md:max-h-[150px]',
          }),
          _jsx('div', {
            className: ' flex-1 flex justify-center',
            children: _jsx('h2', {
              className:
                'md:text-6xl text-4xl font-bold text-center text-black ml-10 md:ml-[-10px] mr-40 mt-7 md:mt-7 md:mb-4 ',
              children: 'Calendar',
            }),
          }),
          _jsxs('div', {
            className:
              'absolute right-4 md:right-6 md:top-3 top-2 md:top-[22px]',
            children: [
              _jsx('button', {
                onClick: () => {
                  handleCalendar();
                  navigate('/calendar');
                },
                children: _jsx('svg', {
                  className:
                    'mt-4 w-[55px] h-[50px] md:w-[60px] md:h-[60px] md:mt-[14px] text-[#01898B]',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: _jsx('path', {
                    d: 'M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1zM8 6H5v3h14V6h-3v1a1 1 0 1 1-2 0V6h-4v1a1 1 0 0 1-2 0V6zm11 5H5v8h14v-8z',
                    strokeWidth: '0',
                    stroke: 'currentColor',
                    fill: 'currentColor',
                  }),
                }),
              }),
              _jsx('button', {
                onClick: handleExpense,
                children: _jsxs('svg', {
                  className:
                    'mt-4 w-12 h-12 md:w-[60px] md:h-[60px] md:mt-[14px] text-[#01898B]',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    _jsx('path', {
                      d: 'M8 12H12M16 12H12M12 12V8M12 12V16',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                    _jsx('path', {
                      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
                      stroke: 'currentColor',
                      strokeWidth: '2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    }),
                  ],
                }),
              }),
            ],
          }),
          expense &&
            _jsx('div', {
              className:
                'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-10 z-[1000]',
              children: _jsxs('div', {
                className:
                  'rounded-[50px] bg-[#cbcbcb] p-6 px-6 rounded shadow-lg text-center border border-black z-[1001] ',
                children: [
                  _jsxs('h3', {
                    className:
                      'md:text-6xl text-5xl font-bold mb-5 mt-5 text-black font-extrabold',
                    children: ['Add New ', _jsx('br', {}), 'Expense?'],
                  }),
                  _jsx('button', {
                    className:
                      'hover:bg-[#016B6D] transition md:text-5xl md:px-20 mt-6 px-18 text-4xl font-bold py-2 px-12 bg-[#067E81] text-black border border-black rounded-full',
                    onClick: () => {
                      navigate('/new-expense');
                    },
                    children: 'YES',
                  }),
                  _jsx('button', {
                    className:
                      'hover:bg-[#505050] transition md:text-5xl md:px-20 mt-6 px-18 text-4xl font-bold py-2 px-14 ml-4 bg-[#696969] text-black border border-black rounded-full',
                    onClick: closeExpense,
                    children: 'NO',
                  }),
                ],
              }),
            }),
        ],
      }),
      _jsx('hr', { className: 'my-4 border-t-2 border-[#01898B] md:mt-4' }),
      _jsx('div', {
        className: 'px-12 w-full flex justify-center items-center mt-8',
        children: _jsx(Calendar, {
          locale: 'en-US',
          calendarType: 'gregory',
          onChange: handleDateClick,
          value: selectedDate,
          tileContent: tileContent,
          className:
            'custom-calendar px-[-40px] w-full max-w-[100px] text-xl h-[510px] border border-[#01898B] shadow-lg p-4 pt-8 rounded-lg bg-white',
        }),
      }),
      popupExpenses &&
        _jsxs('div', {
          className:
            'absolute left-1/2 transform -translate-x-1/2 mt-2 md:mt-3 bg-white border border-gray-300 shadow-lg rounded-lg md:w-[1200px] w-[400px] md:w-[400px] p-4 z-50',
          children: [
            _jsxs('h3', {
              className:
                'text-xl md:text-2xl md:pt-2 font-bold text-center text-black mb-3',
              children: ['Expenses for ', popupExpenses.date],
            }),
            _jsx('div', {
              className: 'max-h-[200px] overflow-y-auto',
              children: popupExpenses.expenses.map((expense, index) =>
                _jsxs(
                  'div',
                  {
                    className:
                      'md:text-xl flex justify-between border-b border-gray-200 py-2 px-2',
                    children: [
                      _jsx('span', {
                        className: 'text-black',
                        children: expense.name,
                      }),
                      _jsxs('span', {
                        className: 'text-[#01898B] font-bold',
                        children: ['$', expense.amount],
                      }),
                    ],
                  },
                  index
                )
              ),
            }),
            _jsx('button', {
              className:
                'w-full mt-4 bg-[#01898B] hover:bg-[#016B6D] text-white font-bold py-2 md:py-3 md:text-xl rounded-lg',
              onClick: () => setPopupExpenses(null),
              children: 'Close',
            }),
          ],
        }),
      isMenuOpen &&
        _jsxs('div', {
          className: `absolute top-0 left-0 h-screen w-64 bg-white shadow-md border transition-all transform ease-in-out
  ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
  shadow-lg shadow-black md:w-1/2`,
          children: [
            _jsx('button', {
              className: 'flex justify-center w-full mb-2',
              onClick: toggleMenu,
              children: _jsx('svg', {
                className:
                  'w-[55px] h-[55px] md:w-[100px] md:h-[100px] mr-[180px] mt-5 md:mr-[82%]',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg',
                children: _jsx('path', {
                  d: 'M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z',
                  fill: '#01898B',
                }),
              }),
            }),
            _jsx('h2', {
              className:
                'text-4xl ml-3 text-[#01898B] font-bold mt-8 md:text-5xl md:ml-[25px]',
              children: 'Menu',
            }),
            _jsx('button', {
              className:
                'md:text-5xl md:px-28 md:ml-[25px] text-2xl block text-center border border-[#01898B] rounded-full py-1 md:py-2 px-[54px] ml-3 mt-7 bg-[#01898B] text-white  hover:bg-[#016B6D] transition',
              onClick: () => {
                navigate('/home');
              },
              children: 'Expense',
            }),
            _jsx('button', {
              className:
                'md:text-5xl md:px-[100px] md:ml-[25px] text-2xl block text-center border border-[#01898B] rounded-full py-1 md:py-2 px-[47px] ml-3 mt-5 bg-[#01898B] text-white  hover:bg-[#016B6D] transition',
              onClick: () => {
                navigate('/recurring');
              },
              children: 'Recurring',
            }),
            _jsx('button', {
              className:
                'md:text-5xl md:px-[115px] md:ml-[25px] text-2xl block text-center border border-[#01898B] rounded-full py-1 md:py-2 px-[55px] ml-3 mt-5 bg-[#01898B] text-white  hover:bg-[#016B6D] transition',
              onClick: handlePopUp,
              children: 'Log Out',
            }),
          ],
        }),
      popUp &&
        _jsx('div', {
          className:
            'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-10',
          children: _jsxs('div', {
            className:
              'md:px-12 rounded-[50px] bg-[#cbcbcb] p-7 rounded shadow-lg text-center border border-black ',
            children: [
              _jsx('h3', {
                className:
                  'md:text-6xl text-5xl font-bold mb-5 mt-5 text-black',
                children: 'Log Out?',
              }),
              _jsx('button', {
                className:
                  'hover:bg-[#055D5F] transition md:text-5xl md:px-20 mt-6 px-18 text-4xl font-bold py-2 px-12 bg-[#067E81] text-black border border-black rounded-full',
                onClick: () => {
                  handleSignOut();
                  navigate('/sign-up');
                },
                children: 'YES',
              }),
              _jsx('button', {
                className:
                  'hover:bg-[#505050] transition md:text-5xl md:px-20 mt-6 px-18 text-4xl font-bold py-2 px-14 ml-4 bg-[#696969] text-black border border-black rounded-full',
                onClick: closePopUp,
                children: 'NO',
              }),
            ],
          }),
        }),
    ],
  });
}
