import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExpenses } from './ExpenseContext';
import { useData } from '../components/User';
export function NewExpense() {
  const { addExpense } = useExpenses();
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [schedule, setSchedule] = useState('');
  const { handleSignOut } = useData();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [expense, setExpense] = useState(false);
  const [, setCancel] = useState(false);
  const [save, setSave] = useState(false);
  const [, setCalendar] = useState(false);
  const handlePopUp = () => setPopUp(true);
  const closePopUp = () => setPopUp(false);
  const handleExpense = () => setExpense(true);
  const handleCalendar = () => setCalendar(true);
  const closeExpense = () => setExpense(false);
  const closeCancel = () => setCancel(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleSubmit = (e) => {
    e.preventDefault();
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!expenseName || !amount || !dueDate || !schedule) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!dueDate.match(datePattern)) {
      alert('Invalid date format! Please enter the date in MM/DD/YYYY format.');
      return;
    }
    const newExpense = {
      id: Date.now().toString(),
      name: expenseName,
      amount,
      dueDate,
      schedule,
    };
    addExpense(newExpense);
    setSave(true);
  };
  return _jsxs('div', {
    className: 'relative flex-grow flex-1 pl-2 px-4',
    children: [
      _jsxs('div', {
        className: 'flex items-center space-x-4',
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
                className: 'ml-auto',
                children: _jsxs('svg', {
                  className:
                    'mt-4 w-12 h-12 md:w-[60px] md:h-[60px] md:mt-[-0px] text-[#01898B]',
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
                'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-10',
              children: _jsxs('div', {
                className:
                  'rounded-[50px] bg-[#cbcbcb] p-6 px-6 rounded shadow-lg text-center border border-black ',
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
      _jsx('hr', { className: 'my-4 border-t-2 border-[#01898B]' }),
      _jsx('h2', {
        className: 'text-5xl md:text-6xl text-center',
        style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
        children: 'New Expense',
      }),
      _jsxs('form', {
        onSubmit: handleSubmit,
        children: [
          _jsxs('label', {
            className: 'block',
            children: [
              _jsxs('span', {
                className: 'ml-1 text-2xl md:text-4xl text-black',
                style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                children: ['Expense', ' '],
              }),
              _jsx('input', {
                required: true,
                name: 'Expense',
                placeholder: 'Expense Name',
                type: 'text',
                value: expenseName,
                onChange: (e) => setExpenseName(e.target.value),
                className:
                  'mt-1 text-l md:text-xl block border border-gray-600 rounded p-2 h-9 md:h-10 w-full',
              }),
            ],
          }),
          _jsxs('label', {
            className: 'block mt-3',
            children: [
              _jsx('span', {
                className: 'ml-1 text-xl md:text-3xl text-black',
                style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                children: 'Amount',
              }),
              _jsx('input', {
                required: true,
                name: 'Amount',
                placeholder: '$',
                type: 'text',
                value: amount,
                onChange: (e) => setAmount(e.target.value),
                className:
                  'mt-1 md:text-xl text-l block border border-gray-600 rounded p-2 h-9 md:h-10 w-full',
              }),
            ],
          }),
          _jsxs('label', {
            className: 'block mt-3',
            children: [
              _jsx('span', {
                className: 'ml-1 text-xl md:text-3xl text-black',
                style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                children: 'Due Date',
              }),
              _jsx('input', {
                required: true,
                name: 'Due Date',
                placeholder: 'MM/DD/YYYY',
                type: 'text',
                value: dueDate,
                onChange: (e) => setDueDate(e.target.value),
                className:
                  'mt-1 text-l md:text-xl block border border-gray-600 rounded p-2 h-9 md:h-10 w-full',
              }),
            ],
          }),
          _jsxs('label', {
            className: 'block mt-6',
            children: [
              _jsx('span', {
                className: 'ml-1 text-2xl md:text-4xl text-black',
                style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                children: 'Schedule',
              }),
              _jsxs('div', {
                className:
                  ' flex flex-col md:flex-row md:space-x-36 md:text-2xl md:items-center mt-2 pt-2 bg-[#E1E0E0] rounded-lg shadow-md shadow-gray-500 p-2',
                children: [
                  _jsxs('label', {
                    className:
                      'mt-[-2px] md:mt-1 md:mb-1 flex items-center space-x-2',
                    children: [
                      _jsx('input', {
                        required: true,
                        type: 'radio',
                        name: 'Schedule',
                        value: 'every-week',
                        className: 'form-radio text-[#01898B] md:w-4 md:h-4',
                        onChange: (e) => setSchedule(e.target.value),
                      }),
                      _jsx('span', {
                        className: 'text-l md:text-2xl',
                        style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                        children: 'Every Week',
                      }),
                    ],
                  }),
                  _jsxs('label', {
                    className: 'mt-1 flex items-center space-x-2',
                    children: [
                      _jsx('input', {
                        type: 'radio',
                        name: 'Schedule',
                        value: 'every-month',
                        className: 'form-radio text-[#01898B] md:w-4 md:h-4',
                        required: true,
                        onChange: (e) => setSchedule(e.target.value),
                      }),
                      _jsx('span', {
                        className: 'text-l md:text-2xl',
                        style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                        children: 'Every Month',
                      }),
                    ],
                  }),
                  _jsxs('label', {
                    className: 'mt-1 flex items-center space-x-2',
                    children: [
                      _jsx('input', {
                        type: 'radio',
                        name: 'Schedule',
                        value: 'every-3-months',
                        className: 'form-radio text-[#01898B] md:w-4 md:h-4',
                        required: true,
                        onChange: (e) => setSchedule(e.target.value),
                      }),
                      _jsx('span', {
                        className: 'text-l md:text-2xl',
                        style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                        children: 'Every 3 Months',
                      }),
                    ],
                  }),
                  _jsxs('label', {
                    className: 'mt-1 flex items-center space-x-2',
                    children: [
                      _jsx('input', {
                        type: 'radio',
                        name: 'Schedule',
                        value: 'every-6-months',
                        className: 'form-radio text-[#01898B] md:w-4 md:h-4',
                        required: true,
                        onChange: (e) => setSchedule(e.target.value),
                      }),
                      _jsx('span', {
                        className: 'text-l md:text-2xl',
                        style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                        children: 'Every 6 Months',
                      }),
                    ],
                  }),
                  _jsxs('label', {
                    className: 'mt-1 flex items-center space-x-2',
                    children: [
                      _jsx('input', {
                        type: 'radio',
                        name: 'Schedule',
                        value: 'every-year',
                        className: 'form-radio text-[#01898B] md:w-4 md:h-4',
                        required: true,
                        onChange: (e) => setSchedule(e.target.value),
                      }),
                      _jsx('span', {
                        className: 'text-l md:text-2xl',
                        style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                        children: 'Every Year',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          _jsxs('div', {
            className: 'flex justify-center md:mt-1',
            children: [
              _jsx('button', {
                className:
                  ' hover:bg-[#016B6D] transition transition drop-shadow-xl mt-6 px-[65px] md:px-[275px] mr-1 ml-2 text-4xl md:text-5xl font-bold py-1 md:py-2 px-12 bg-[#067E81] text-black border rounded-3xl',
                style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                type: 'submit',
                children: 'Save',
              }),
              _jsx('button', {
                className:
                  ' hover:bg-[#505050] transition drop-shadow-xl mt-6 px-[50px] md:px-[275px] ml-6 text-4xl font-bold py-1 md:py-2 md:text-5xl px-12 bg-[#696969] text-black border rounded-3xl',
                style: { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' },
                onClick: () => {
                  closeCancel();
                  navigate('/home');
                },
                children: 'Cancel',
              }),
            ],
          }),
        ],
      }),
      save &&
        _jsx('div', {
          className:
            'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-10',
          children: _jsxs('div', {
            className:
              'md:px-8 md:py-8 bg-[#cbcbcb] py-5 px-6 p-6 rounded shadow-lg text-center border border-black rounded-[50px] ',
            children: [
              _jsxs('h3', {
                className:
                  'md:text-[50px] text-[44px] font-bold text-black mt-1',
                children: ['Expense ', _jsx('br', {}), ' Created'],
              }),
              _jsx('button', {
                className:
                  'hover:bg-[#016B6D] transition md:px-36 md:py-3 font-bold mt-6 px-28 text-4xl py-2 bg-[#067E81] text-black border border-black rounded-full',
                onClick: () => navigate('/home'),
                children: 'OK',
              }),
            ],
          }),
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
                  ' hover:bg-[#505050] transition md:text-5xl md:px-20 mt-6 px-18 text-4xl font-bold py-2 px-14 ml-4 bg-[#696969] text-black border border-black rounded-full',
                onClick: closePopUp,
                children: 'NO',
              }),
            ],
          }),
        }),
    ],
  });
}
