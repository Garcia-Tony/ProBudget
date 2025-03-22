import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';
import { readToken } from '../lib';
export function SignInForm() {
  const { handleSignIn } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData(event.currentTarget);
      const userData = Object.fromEntries(formData);
      const req = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${readToken()}`,
        },
        body: JSON.stringify(userData),
      };
      const res = await fetch('/api/auth/log-in', req);
      if (!res.ok) {
        throw new Error(`fetch Error ${res.status}`);
      }
      const { user, token } = await res.json();
      handleSignIn(user, token);
      console.log('Signed In', user);
      console.log('Received token:', token);
      navigate('/home');
    } catch (err) {
      alert(`Error signing in: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }
  return _jsxs('div', {
    className:
      'flex flex-col items-center justify-center min-h-screen w-full bg-[#13878B] absolute top-0 left-0',
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
              'font-bold text-6xl text-black text-center mb-6 md:text-7xl',
            children: 'Login',
          }),
          _jsx('div', {
            className: 'mb-1 md:flex justify-center',
            children: _jsxs('label', {
              className: 'mb-1 block',
              children: [
                _jsxs('span', {
                  className: 'md:text-3xl underline text-2xl text-white',
                  children: [' ', 'Username', ' '],
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
            children: 'Login',
          }),
        ],
      }),
      _jsxs('p', {
        className: 'text-xl mt-8 text-white md:text-2xl',
        children: [
          "Don't have an account?",
          ' ',
          _jsx('span', {
            className:
              'md:text-2xl text-xl text-black cursor-pointer underline hover:text-[#00C3C9] transition',
            onClick: () => navigate('/sign-up'),
            children: 'Sign Up',
          }),
        ],
      }),
    ],
  });
}
