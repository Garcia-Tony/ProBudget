import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/sign-up', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const user = await res.json();
      console.log('Registered', user);
      setPopUp(true);
    } catch (err) {
      alert(`Error registering user: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }
  return _jsxs('div', {
    className:
      'flex flex-col items-center justify-center h-screen bg-[#13878B]',
    children: [
      _jsx('img', {
        src: '/ProBudget.png',
        alt: 'ProBudget Logo',
        className: 'md:justify-center md:w-36 md:mb-8 w-32 mb-4',
      }),
      _jsxs('form', {
        onSubmit: handleSubmit,
        className: 'w-full max-w-sm',
        children: [
          _jsx('h2', {
            className:
              ' text-6xl text-black font-bold text-center mb-6 md:text-7xl',
            children: 'Sign Up',
          }),
          _jsx('div', {
            className: 'mb-1 md:flex justify-center',
            children: _jsxs('label', {
              className: 'mb-1 block',
              children: [
                _jsx('span', {
                  className: 'md:text-3xl underline text-2xl text-white',
                  children: 'Username',
                }),
                _jsx('input', {
                  required: true,
                  name: 'username',
                  placeholder: 'Username',
                  type: 'text',
                  className:
                    'text-2xl block border border-gray-600 rounded p-2 h-12 w-full md:w-[500px] lg:w-[600px] mb-2 mt-2',
                }),
              ],
            }),
          }),
          _jsx('br', {}),
          _jsx('div', {
            className: 'mb-1 md:flex justify-center',
            children: _jsxs('label', {
              className: 'mb-1 block',
              children: [
                _jsx('span', {
                  className: 'md:text-3xl underline text-2xl text-white',
                  children: 'Password',
                }),
                _jsx('input', {
                  required: true,
                  name: 'password',
                  placeholder: 'Password',
                  type: 'password',
                  className:
                    ' text-2xl block border border-gray-600 rounded p-2 h-12 w-full md:w-[500px] lg:w-[600px] mb-2 mt-2',
                }),
              ],
            }),
          }),
          _jsx('button', {
            disabled: isLoading,
            className:
              'md:mt-8 md:md:flex justify-center text-2xl px-20 md:px-28 lg:px-36 text-center border rounded-full py-3 bg-white text-black mt-12 mx-auto block hover:bg-gray-200 transition',
            children: 'Sign Up',
          }),
        ],
      }),
      _jsxs('p', {
        className: 'text-xl mt-8 text-white md:text-2xl',
        children: [
          'Already have an account?',
          ' ',
          _jsx('span', {
            className:
              'md:text-2xl text-xl text-black cursor-pointer underline hover:text-[#00C3C9] transition',
            onClick: () => navigate('/log-in'),
            children: 'Login',
          }),
        ],
      }),
      popUp &&
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
                children: ['Account ', _jsx('br', {}), ' Created'],
              }),
              _jsx('button', {
                className:
                  'md:px-36 md:py-3 font-bold mt-6 px-28 text-4xl py-2 bg-[#067E81] text-black border border-black rounded-full',
                onClick: () => navigate('/log-in'),
                children: 'OK',
              }),
            ],
          }),
        }),
    ],
  });
}
