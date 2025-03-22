import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { RegistrationForm } from './SignUp';
import { SignInForm } from './Login';
export function AuthPage({ mode }) {
  return _jsxs('div', {
    className: 'container m-4',
    children: [
      mode === 'sign-up' && _jsx(RegistrationForm, {}),
      mode === 'log-in' && _jsx(SignInForm, {}),
    ],
  });
}
